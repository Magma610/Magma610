import type { APIRoute } from 'astro';
import { FAQ_PAGE } from '../../i18n/faq';
import { listings } from '../../data/listings.js';
import { TERRITORIO_CONTENT } from '../../i18n/territorio';
import { AMENITY_CATEGORIES, AMENITY_NOT_INCLUDED, AMENITY_LABELS } from '../../i18n/amenities';
import { logUnanswered, logPasswordUsed } from '../../lib/chat-logging';

// Endpoint on-demand: non deve essere prerenderizzato in build.
export const prerender = false;

const MAX_MESSAGES = 40;
const CLAUDE_MODEL = 'claude-haiku-4-5-20251001';
const VERONIQUE_PHONE = '+39 380 182 4545';
const ADDRESS = 'Via Faro Filadelfo 102, Pedara';

type ChatLang = 'it' | 'es' | 'en' | 'fr' | 'de';
const SUPPORTED_LANGS: ChatLang[] = ['it', 'es', 'en', 'fr', 'de'];
const LANGUAGE_NAMES: Record<ChatLang, string> = {
  it: 'italiano', es: 'español', en: 'English', fr: 'français', de: 'Deutsch',
};

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function normalizeLang(value: unknown): ChatLang {
  return SUPPORTED_LANGS.includes(value as ChatLang) ? (value as ChatLang) : 'it';
}

const LIMIT_REACHED_TEXT: Record<ChatLang, string> = {
  it: `Abbiamo raggiunto il limite di messaggi per questa conversazione. Per continuare, contatta direttamente Veronique al numero ${VERONIQUE_PHONE} (telefono/WhatsApp).`,
  es: `Hemos alcanzado el límite de mensajes de esta conversación. Para continuar, ponte en contacto directamente con Veronique al ${VERONIQUE_PHONE} (teléfono/WhatsApp).`,
  en: `We've reached the message limit for this conversation. To continue, please contact Veronique directly at ${VERONIQUE_PHONE} (phone/WhatsApp).`,
  fr: `Nous avons atteint la limite de messages pour cette conversation. Pour continuer, contactez directement Veronique au ${VERONIQUE_PHONE} (téléphone/WhatsApp).`,
  de: `Wir haben das Nachrichtenlimit für dieses Gespräch erreicht. Bitte wenden Sie sich für weitere Fragen direkt an Veronique unter ${VERONIQUE_PHONE} (Telefon/WhatsApp).`,
};

const GENERIC_ERROR_TEXT: Record<ChatLang, string> = {
  it: `Al momento non riesco a rispondere: riprova tra poco oppure contatta direttamente Veronique al ${VERONIQUE_PHONE} (telefono/WhatsApp).`,
  es: `En este momento no puedo responder: inténtalo de nuevo en breve o contacta directamente con Veronique al ${VERONIQUE_PHONE} (teléfono/WhatsApp).`,
  en: `I can't reply right now: please try again shortly or contact Veronique directly at ${VERONIQUE_PHONE} (phone/WhatsApp).`,
  fr: `Je ne peux pas répondre pour le moment : réessayez bientôt ou contactez directement Veronique au ${VERONIQUE_PHONE} (téléphone/WhatsApp).`,
  de: `Ich kann gerade nicht antworten: Bitte versuchen Sie es später erneut oder wenden Sie sich direkt an Veronique unter ${VERONIQUE_PHONE} (Telefon/WhatsApp).`,
};

function buildListingAmenitiesText(listing: (typeof listings)[number]): string {
  const excluded = new Set(listing.serviziEsclusi ?? []);
  const included = AMENITY_CATEGORIES
    .flatMap((cat) => cat.items)
    .filter((item) => !excluded.has(item.id))
    .map((item) => AMENITY_LABELS.it[item.id])
    .filter(Boolean);
  const notIncluded = [...AMENITY_NOT_INCLUDED.map((i) => i.id), ...(listing.serviziEsclusi ?? [])]
    .map((id) => AMENITY_LABELS.it[id])
    .filter(Boolean);
  return `Servizi inclusi: ${included.join(', ')}.\nNon inclusi: ${notIncluded.join(', ')}.`;
}

function buildKnowledgeBase(): string {
  const faqText = FAQ_PAGE.it.categories
    .map((cat) => {
      const items = cat.items.map((item) => `- D: ${item.question}\n  R: ${item.answer}`).join('\n');
      return `### ${cat.title}\n${items}`;
    })
    .join('\n\n');

  const listingsText = listings
    .map((listing) => {
      return [
        `### ${listing.name}`,
        `Ospiti: fino a ${listing.ospiti}. Camere da letto: ${listing.camereDaLetto ?? 'monolocale (nessuna camera separata)'}. Letti: ${listing.letti}. Bagni: ${listing.bagni}.`,
        `Descrizione: ${listing.descrizione}`,
        buildListingAmenitiesText(listing),
        `Link Airbnb: ${listing.airbnbUrl}`,
      ].join('\n');
    })
    .join('\n\n');

  const territorioText = (Object.keys(TERRITORIO_CONTENT) as (keyof typeof TERRITORIO_CONTENT)[])
    .map((slug) => {
      const page = TERRITORIO_CONTENT[slug].it;
      return `- ${page.title}: ${page.intro}`;
    })
    .join('\n');

  return `
## FAQ (Domande Frequenti)
${faqText}

## Appartamenti
${listingsText}

## Pagine "Territorio" disponibili sul sito (cosa trattano)
${territorioText}

## Contatti
Veronique (gestione diretta, senza call center): telefono/WhatsApp ${VERONIQUE_PHONE}.
Indirizzo: ${ADDRESS}.

## Informazioni pratiche sulla casa

Mancanza di corrente / luce che non funziona — procedura a due passaggi, da seguire SEMPRE in ordine e senza saltare passaggi:

PASSAGGIO 1 — Quadro elettrico interno (informazione SEMPRE libera, nessuna password richiesta). Alla prima segnalazione di un problema di corrente, fornisci SOLO questa informazione e poi chiedi all'ospite di controllare e farti sapere se il problema si è risolto — non menzionare ancora il quadro esterno né la password Wifi:
"Ci sono due quadri elettrici. Il primo è dentro l'appartamento, vicino alla porta d'ingresso: se gli interruttori sono giù, alzali, il problema si risolve di solito così."

PASSAGGIO 2 — Quadro/contatore esterno e chiave di riserva (informazione RISERVATA — richiede la password Wifi). Passa a questo passaggio SOLO se l'ospite conferma che il quadro interno non ha risolto il problema (o dice esplicitamente di aver già controllato il quadro interno senza risultato): a quel punto chiedi la password Wifi prima di fornire questa informazione:
"Se invece gli interruttori del quadro interno sono già su, bisogna uscire in giardino dalla porta verde. Usciti, subito a sinistra c'è un contatore esterno; la chiave si trova nel mazzo fornito. Se manca, esiste una chiave di riserva in una cassettina con codice, subito dopo la porta verde (venendo dall'interno, sulla sinistra). [TODO: codice cassetta da aggiungere]."

Acqua calda / boiler (informazione SEMPRE libera):
"Il boiler contiene 80 litri, sufficienti per circa 3 docce. Se l'acqua resta aperta a lungo il boiler può scaricarsi: usare l'acqua necessaria senza sprechi, preferire la doccetta manuale a muro invece del soffione, che ha portata maggiore."

Cassetta di primo soccorso (informazione SEMPRE libera):
"Si trova in giardino, nell'anta di sinistra del mobile a muro oltre il lavandino esterno, senza lucchetto — contiene una borsa arancione con cerotti, garze, guanti monouso."

Dove mangiare / Tour dell'Etna: contenuti non ancora disponibili in questa base di conoscenza. In questi casi rispondi che l'informazione è in arrivo e consiglia di chiedere direttamente a Veronique nel frattempo.
`.trim();
}

function buildSystemPrompt(lang: ChatLang, page: string, wifiUnlocked: boolean): string {
  const languageName = LANGUAGE_NAMES[lang];
  const wifiStatusNote = wifiUnlocked
    ? "Il sistema ha verificato che l'ultimo messaggio dell'utente contiene la password Wifi CORRETTA: puoi fornire ora l'informazione RISERVATA sul quadro/contatore esterno e sulla chiave di riserva (PASSAGGIO 2 della procedura mancanza di corrente)."
    : "Il sistema ha verificato che nessuna password Wifi valida risulta fornita in questo momento. Se l'utente ha appena provato a darti una password e non è quella corretta, avvisalo gentilmente che non è corretta e suggerisci di controllare maiuscole/minuscole e che non ci siano spazi — non rivelare in nessun caso l'informazione riservata. Per la mancanza di corrente in particolare: NON chiedere la password Wifi alla prima segnalazione del problema — dai prima solo l'informazione libera sul quadro interno (PASSAGGIO 1) e chiedi se questo risolve il problema. Chiedi la password Wifi SOLO se l'utente conferma che il quadro interno non ha risolto il problema, o se sta chiedendo esplicitamente del quadro/contatore esterno dopo aver già provato quello interno.";

  return `
Sei l'assistente virtuale del sito di Magma 610 Bed and More, un B&B a conduzione diretta in pietra lavica a Pedara (Etna), gestito da Veronique. Rispondi agli ospiti (attuali o potenziali) che scrivono nella chat del sito.

REGOLE FONDAMENTALI:
1. Rispondi ESCLUSIVAMENTE a domande legate al soggiorno a Magma 610: la struttura, gli appartamenti, i servizi, il territorio circostante, le prenotazioni e le pratiche pratiche del soggiorno. Se l'utente chiede qualcosa di totalmente estraneo a questo ambito, rifiuta gentilmente e riporta la conversazione al soggiorno a Magma 610.
2. Rispondi SEMPRE in ${languageName} (lingua richiesta: "${lang}"), indipendentemente dalla lingua usata dall'utente per scrivere. La base di conoscenza qui sotto è in italiano: traduci tu al volo il contenuto pertinente nella lingua richiesta.
3. Se l'utente chiede esplicitamente di parlare con una persona, oppure se non riesci ad aiutarlo dopo un paio di scambi, fornisci il numero di Veronique (${VERONIQUE_PHONE}) specificando che questa chat è un supporto ma che Veronique resta sempre raggiungibile direttamente.
4. Se non trovi la risposta nella base di conoscenza fornita qui sotto, dillo onestamente e in modo utile (proponi di contattare Veronique), e aggiungi alla FINE della tua risposta, su una riga separata e per ultima, esattamente questo marcatore: [UNANSWERED: testo della domanda originale dell'utente] — è un marcatore tecnico che verrà rimosso automaticamente prima di mostrare la risposta all'utente: non menzionarlo mai e non spiegarlo mai all'utente.
5. ${wifiStatusNote}

Contesto tecnico (non menzionarlo esplicitamente all'utente): l'utente si trova sulla pagina "${page}" del sito.

BASE DI CONOSCENZA:
${buildKnowledgeBase()}
`.trim();
}

function stripUnansweredMarker(text: string): { cleaned: string; question: string | null } {
  const match = text.match(/\[UNANSWERED:\s*([\s\S]*?)\]\s*$/);
  if (!match) return { cleaned: text.trim(), question: null };
  return { cleaned: text.slice(0, match.index).trim(), question: match[1].trim() };
}

export const POST: APIRoute = async ({ request }) => {
  let body: { messages?: ChatMessage[]; lang?: string; page?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 });
  }

  const lang = normalizeLang(body.lang);
  const page = typeof body.page === 'string' ? body.page : '/';
  const messages = Array.isArray(body.messages) ? body.messages : [];

  if (messages.length > MAX_MESSAGES) {
    return new Response(JSON.stringify({ reply: LIMIT_REACHED_TEXT[lang] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const wifiPassword = process.env.WIFI_PASSWORD;
  const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user');
  const wifiUnlocked = Boolean(wifiPassword) && Boolean(lastUserMessage) && lastUserMessage!.content.includes(wifiPassword!);

  if (wifiUnlocked) {
    await logPasswordUsed(messages);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('[api/chat] ANTHROPIC_API_KEY non configurata');
    return new Response(JSON.stringify({ reply: GENERIC_ERROR_TEXT[lang] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const systemPrompt = buildSystemPrompt(lang, page, wifiUnlocked);

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: CLAUDE_MODEL,
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error('[api/chat] Errore API Anthropic:', anthropicRes.status, errText);
      return new Response(JSON.stringify({ reply: GENERIC_ERROR_TEXT[lang] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await anthropicRes.json();
    const rawReply = Array.isArray(data.content)
      ? data.content.filter((block: { type: string }) => block.type === 'text').map((block: { text: string }) => block.text).join('\n')
      : '';

    const { cleaned, question } = stripUnansweredMarker(rawReply);
    if (question) {
      await logUnanswered(question, lang, page);
    }

    return new Response(JSON.stringify({ reply: cleaned }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[api/chat] Errore imprevisto:', err);
    return new Response(JSON.stringify({ reply: GENERIC_ERROR_TEXT[lang] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
