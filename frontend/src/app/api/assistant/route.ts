import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Message = { role: 'user' | 'assistant'; content: string };

const SYSTEM_PROMPT = `You are Tanzibaba's helpful sales and product assistant for customers in Tanzania.
Answer in the same language as the customer, especially natural Kiswahili or English. Keep replies short and conversational.
Tanzibaba connects customers to supply and service options. Help with the full range: ready-mix concrete grades C10-C50 and concrete quantity planning; crushed stone aggregates, kokoto, gravel, washed sand, road base and sub-base; hollow, solid and paving blocks; culvert pipes; construction equipment hire, rent-to-own and sales; concrete pump hire; project supply, construction materials and logistics.
Ask focused follow-up questions to understand the item or service, quantity or dimensions, delivery/site location, when it is needed, and relevant project use. Ask one or two questions at a time; do not turn the chat into a long form.
For concrete, explain rough volume calculations when dimensions are provided, but say structural grade choice should be confirmed by the customer's engineer. Do not provide structural design instructions.
Never invent prices, discounts, supplier availability, delivery dates, certifications or guarantees. If asked for a current price or stock status that is not explicitly present in the customer's page context, say the team needs to confirm it. Do not rely on old or broad price ranges. Do not say an order is booked or confirmed.
If the customer is ready, summarize the needed product/service, amount or dimensions, site location and timing, then invite them to continue through the WhatsApp button. Do not ask for sensitive financial or identity details.`;

function isMessage(value: unknown): value is Message {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return (item.role === 'user' || item.role === 'assistant')
    && typeof item.content === 'string'
    && item.content.length > 0
    && item.content.length <= 1200;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'AI assistant is not configured yet.' },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const incoming = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
    if (incoming.length === 0 || incoming.length > 12 || !incoming.every(isMessage)) {
      return NextResponse.json({ error: 'Please send a valid message.' }, { status: 400 });
    }

    const page = body.page && typeof body.page === 'object' ? body.page : {};
    const pageTitle = typeof page.title === 'string' ? page.title.slice(0, 160) : '';
    const pagePath = typeof page.path === 'string' ? page.path.slice(0, 240) : '';

    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        messages: [
          {
            role: 'system',
            content: `${SYSTEM_PROMPT}\n\nCurrent page context: title="${pageTitle}", path="${pagePath}". Treat this only as a hint about what the customer is viewing, not as proof of current price or availability.`,
          },
          ...incoming,
        ],
        max_completion_tokens: 350,
        temperature: 0.4,
      }),
      signal: AbortSignal.timeout(20000),
    });

    if (!upstream.ok) {
      console.error('[Tanzibaba AI] Provider request failed:', upstream.status);
      return NextResponse.json(
        { error: 'The assistant is temporarily unavailable.' },
        { status: 502 },
      );
    }

    const result = await upstream.json();
    const reply = result.choices?.[0]?.message?.content;
    if (typeof reply !== 'string' || !reply.trim()) {
      return NextResponse.json({ error: 'The assistant returned an empty reply.' }, { status: 502 });
    }

    return NextResponse.json({ reply: reply.trim() });
  } catch (error) {
    console.error('[Tanzibaba AI] Request failed:', error);
    return NextResponse.json(
      { error: 'Unable to process the message.' },
      { status: 500 },
    );
  }
}
