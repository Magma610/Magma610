// Logging "best effort" verso lo Script Google collegato al foglio di monitoraggio chat.
// Non deve mai far fallire la risposta della chat: errori di rete vengono solo loggati in console.

interface ChatTranscriptMessage {
  role: 'user' | 'assistant';
  content: string;
}

async function postToGoogleScript(body: Record<string, unknown>): Promise<void> {
  const url = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;
  if (!url || !secret) return;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, ...body }),
    });
  } catch (err) {
    console.error('[chat-logging] Impossibile raggiungere lo script Google:', err);
  }
}

export async function logUnanswered(domanda: string, lingua: string, pagina: string): Promise<void> {
  await postToGoogleScript({
    type: 'unanswered_question',
    domanda,
    lingua,
    pagina,
    timestamp: new Date().toISOString(),
  });
}

export async function logPasswordUsed(trascrizione: ChatTranscriptMessage[]): Promise<void> {
  await postToGoogleScript({
    type: 'password_used',
    trascrizione,
    timestamp: new Date().toISOString(),
  });
}
