'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, LoaderCircle, MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const WHATSAPP_NUMBER = '255716002790';
const starters = [
  'Natafuta bidhaa za ujenzi',
  'Nahitaji huduma ya vifaa',
  'Nataka kujua kiasi cha zege',
];

export default function AiSalesChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, busy, open]);

  async function sendMessage(text = input) {
    const value = text.trim();
    if (!value || busy) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: value }];
    setMessages(nextMessages);
    setInput('');
    setBusy(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.slice(-12),
          page: {
            title: document.title,
            path: window.location.pathname,
          },
        }),
      });
      const data = await response.json();
      if (!response.ok || typeof data.reply !== 'string') {
        throw new Error(data.error || 'Imeshindikana kuunganisha msaidizi.');
      }
      setMessages(current => [...current, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(current => [
        ...current,
        {
          role: 'assistant',
          content: 'Samahani, msaidizi hapatikani kwa sasa. Unaweza kuendelea na timu yetu kupitia WhatsApp.',
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function continueOnWhatsApp() {
    const page = typeof document !== 'undefined' ? document.title : 'Tanzibaba';
    const conversation = messages
      .slice(-10)
      .map(message => `${message.role === 'user' ? 'Mteja' : 'Msaidizi'}: ${message.content}`)
      .join('\n');
    const body = [
      'Habari Tanzibaba, naomba msaada kuhusu bidhaa/huduma hii.',
      `Ukurasa: ${page} (${window.location.pathname})`,
      '',
      'Muhtasari wa mazungumzo:',
      conversation || 'Naomba mniulize mahitaji yangu.',
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Chat with Tanzibaba assistant"
          className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full bg-green-600 px-5 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Uliza Tanzibaba</span>
        </button>
      )}

      {open && (
        <section
          aria-label="Tanzibaba AI assistant"
          className="fixed bottom-4 right-4 z-[100] flex h-[min(640px,calc(100dvh-2rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between bg-green-700 px-4 py-3.5 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold">Msaidizi wa Tanzibaba</h2>
                <p className="text-xs text-green-100">Bidhaa, huduma na maelezo ya oda</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Funga chat"
              className="rounded-lg p-2 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4" aria-live="polite">
            {messages.length === 0 && (
              <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white p-3.5 text-sm leading-6 text-gray-700 shadow-sm">
                Habari! Naweza kukusaidia kupata bidhaa au huduma, kukadiria mahitaji, na kuandaa maelezo ya oda. Unatafuta nini?
                <div className="mt-3 flex flex-wrap gap-2">
                  {starters.map(starter => (
                    <button
                      key={starter}
                      type="button"
                      onClick={() => sendMessage(starter)}
                      className="rounded-full border border-green-200 bg-green-50 px-3 py-2 text-left text-xs font-medium text-green-800 transition hover:bg-green-100"
                    >
                      {starter}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                  message.role === 'user'
                    ? 'ml-auto rounded-tr-sm bg-green-600 text-white'
                    : 'rounded-tl-sm bg-white text-gray-700 shadow-sm'
                }`}
              >
                {message.content}
              </div>
            ))}

            {busy && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Natafuta jibu…
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-gray-200 bg-white p-3">
            {messages.some(message => message.role === 'assistant') && (
              <button
                type="button"
                onClick={continueOnWhatsApp}
                className="mb-3 w-full rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200"
              >
                Endelea WhatsApp na muhtasari huu
              </button>
            )}
            <form
              onSubmit={event => {
                event.preventDefault();
                void sendMessage();
              }}
              className="flex items-end gap-2"
            >
              <label className="sr-only" htmlFor="tanzibaba-chat-input">Andika ujumbe wako</label>
              <textarea
                id="tanzibaba-chat-input"
                value={input}
                onChange={event => setInput(event.target.value)}
                onKeyDown={event => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    void sendMessage();
                  }
                }}
                maxLength={1200}
                rows={1}
                placeholder="Andika unachohitaji…"
                className="max-h-24 min-h-11 flex-1 resize-y rounded-xl border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
              <button
                type="submit"
                disabled={!input.trim() || busy}
                aria-label="Tuma ujumbe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-2 text-center text-[11px] leading-4 text-gray-400">
              Jibu la AI linaweza kukosea; bei na upatikanaji huthibitishwa na timu.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
