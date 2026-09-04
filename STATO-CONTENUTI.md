# Stato dei contenuti — Magma 610

Analisi generata il 4 settembre 2026 (a partire dallo stato del branch `main`, commit `dea925d`).

## 1. Articoli blog

Esistono **2 articoli**, ciascuno tradotto in tutte e 5 le lingue (IT/ES/EN/FR/DE) in `src/content/blog/<lang>/`:

| Articolo | Data pubblicazione | Slug |
|---|---|---|
| "L'Etna, il vostro vicino di casa" | **2026-09-14** | `etna-vicino-di-casa` |
| "Trekking sull'Etna: i sentieri per ogni livello" | **2026-09-28** | `trekking-sull-etna` |

**⚠️ Attenzione — nessun articolo è attualmente pubblicato.** `src/lib/blog.ts` (`isPublished`) mostra un post solo se `data <= oggi`. Con la data odierna (4 settembre 2026), entrambi gli articoli hanno data futura: la pagina `/blog` (in tutte le lingue) risulta quindi **vuota** finché non si arriva rispettivamente al 14 e al 28 settembre 2026 *e* non viene rieseguita una build dopo quella data (il sito è statico — vedi `.github/workflows/scheduled-rebuild.yml`, che ricostruisce il sito ogni notte per questo scopo. Verificare che il Deploy Hook Vercel collegato al workflow sia attivo, altrimenti gli articoli non compariranno online alla data giusta).

**Qualità del contenuto per lingua:**
- `trekking-sull-etna.md` — contenuto reale e completo in **tutte** le 5 lingue (nessun marcatore di placeholder).
- `etna-vicino-di-casa.md` — contiene un commento editoriale `*[Testo segnaposto/riempitivo/placeholder...]*` in **tutte** le 5 lingue (compreso l'italiano), seguito comunque da testo esteso e coerente. Da verificare con l'autore se il testo attuale è da considerarsi definitivo o se il placeholder segnala che va ancora sostituito.

**File orfano trovato:** `src/content/blog/etna-vicino-di-casa.md` (nella root della collection, senza sottocartella lingua). È una bozza precedente e più corta dello stesso articolo, superata dalla versione in `src/content/blog/it/etna-vicino-di-casa.md`. Non viene mai renderizzata (`parsePostId` si aspetta un id `lingua/slug`; con questo file la "lingua" risulterebbe `etna-vicino-di-casa`, che non è una lingua valida, quindi viene scartato da `postsForLocale`). È contenuto morto: da eliminare o tenere a mente se in futuro qualcuno lo modifica per errore pensando sia quello attivo.

## 2. Pagine Territorio — stato SEO

7 pagine in `src/i18n/territorio.ts`, tutte con `metaTitle`/`metaDescription`/`title` (H1) per lingua.

| Slug | IT (ottimizzato SEO) | ES/EN/FR/DE |
|---|---|---|
| `trekking-etna` | ✅ | ⚠️ generico |
| `cantine-etna` | ✅ | ⚠️ generico |
| `gole-alcantara` | ✅ | ⚠️ generico |
| `taormina` | ✅ | ⚠️ generico |
| `catania-storica` | ✅ | ⚠️ generico |
| `bici-etna` | ✅ | ⚠️ generico |
| `centro-cuore-morgagni` | ✅ | ⚠️ generico |

**Solo la versione italiana è ottimizzata**: `metaTitle` lungo, con keyword geografiche/tematiche e suffisso brand (es. `"Trekking Etna: Sentieri e Percorsi — Magma 610, Pedara"`, `"Gole Alcantara da Pedara: Guida Completa — Magma 610"`).

**Tutte le altre 4 lingue, per tutte le 7 pagine, hanno ancora la versione generica iniziale**: `metaTitle` corto, senza keyword geografiche né brand (es. `"Hiking Mount Etna"`, `"Taormina"`, `"Alcantara Gorges"`), ciascuna marcata da un commento `TODO` esplicito nel codice. Corpo testo comunque presente e leggibile (non è lorem ipsum), ma meno dettagliato e meno mirato SEO rispetto al modello italiano.

Nessuna pagina territorio ha versioni non-IT già portate al livello SEO dell'italiano: la situazione è binaria, IT fatto, tutto il resto da fare.

## 3. Commenti TODO nel progetto

Cercati tutti i `TODO`/`FIXME`/`XXX` in `src/`, `README.md`, `STATO-PROGETTO.md`. Totale: **34 occorrenze**.

| File | Righe | Contenuto | Nota |
|---|---|---|---|
| `src/i18n/territorio.ts` | 103, 120, 137, 154, 208, 225, 242, 259, 313, 330, 347, 364, 418, 435, 452, 469, 523, 540, 557, 574, 628, 646, 664, 682, 738, 755, 772, 789 | `// TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello` | 28 occorrenze = 4 lingue × 7 pagine territorio (vedi punto 2) |
| `src/i18n/faq.ts` | 189, 249, 309, 369 | stesso testo | Una per blocco lingua ES/EN/FR/DE; solo l'italiano (riga 31) è definitivo |
| `src/views/FaqView.astro` | 11 | commento esplicativo che rimanda ai TODO di `faq.ts` (il JSON-LD `FAQPage` viene emesso solo in italiano perché le altre lingue hanno testo segnaposto) | Non un'azione a sé, ma dipende dagli stessi 4 TODO sopra |
| `src/pages/api/chat.ts` | 107 | `[TODO: codice cassetta da aggiungere]` dentro il prompt di sistema dell'assistente AI (istruzioni su come recuperare la chiave della cassetta di sicurezza) | Dato mancante reale, non solo un placeholder editoriale — da completare prima che la chat AI dia indicazioni operative agli ospiti |

Non ci sono altri `TODO` nel codice sorgente (`.astro`, `.ts`, `.js`, `.md/.mdx` sotto `src/`).

Fuori da `src/`, `README.md` contiene una sezione `## TODO prima di andare online` con una checklist di 9 punti (foto da CDN Airbnb, foto territorio stock, testi segnaposto, contenuti blog, deploy hook Vercel, booking diretto, analytics, chat AI, dominio). È una checklist di progetto, non un commento nel codice, e alcuni punti risultano già superati rispetto a quanto trovato in questa analisi (es. la chat AI esiste già in `src/pages/api/chat.ts`, e ora sono 2 articoli blog non più 1) — vale la pena aggiornarla separatamente.

`STATO-PROGETTO.md` (generato il 4 settembre 2026, stesso giorno di questa analisi) è già in parte disallineato con lo stato attuale del codice: cita numeri di riga dei TODO diversi da quelli reali qui sopra, e descrive come "TODO" i dati legali di Privacy/Cookie Policy che nel codice attuale risultano già compilati (es. la data di aggiornamento è impostata al 4 settembre 2026, non più `[data da inserire]`). Consigliato sostituirlo o aggiornarlo per evitare confusione tra i due file.
