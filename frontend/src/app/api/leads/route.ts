import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json');

function ensureDataDir() {
  const dir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, '[]');
  }
}

function readLeads() {
  ensureDataDir();
  const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeLeads(leads: unknown[]) {
  ensureDataDir();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const lead = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      ...body,
      createdAt: new Date().toISOString(),
    };

    const leads = readLeads();
    leads.push(lead);
    writeLeads(leads);

    console.log('[Lead Captured]', JSON.stringify(lead, null, 2));

    return NextResponse.json({ success: true, id: lead.id });
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  try {
    const leads = readLeads();
    return NextResponse.json({ leads, count: leads.length });
  } catch {
    return NextResponse.json({ leads: [], count: 0 });
  }
}
