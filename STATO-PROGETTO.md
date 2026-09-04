# Stato del progetto — Magma 610

Sintesi generata il 4 settembre 2026.

## Pagine esistenti

Sito multilingua (IT come default senza prefisso, `/[lang]/` per ES/EN/FR/DE):

- **Home** (`/`, `/[lang]/`)
- **La struttura** — appartamenti (`/la-struttura`)
- **Contatti** (`/contatti`)
- **Territorio** — indice + pagine dinamiche `/territorio/[slug]` (5 contenuti: trekking, cantine/vino, cicloturismo, ecc.)
- **Blog** — indice + post dinamici `/blog/[...slug]` (2 articoli: "Etna vicino di casa", "Trekking sull'Etna")
- **FAQ** (`/faq`)
- **Privacy Policy** (`/privacy-policy`) e **Cookie Policy** (`/cookie-policy`)
- `robots.txt` + sitemap (via `@astrojs/sitemap`)

## Cosa è completo

- **Foto reali**: caricate in `public/images/camere/magma-102/` e `magma-104/`, referenziate correttamente in `src/data/listings.js`.
- **Icone servizi**: set completo di SVG reali in `public/images/camere/icone/` (wifi, cucina, riscaldamento, ecc.), non segnaposto.
- **FAQ in italiano**: contenuto definitivo, con JSON-LD `FAQPage` emesso solo per `it`.
- **Contatti**: telefono/WhatsApp reale (+39 380 182 4545) tradotto in tutte le lingue.
- **SEO base**: `site` URL corretto in `astro.config.mjs`, `robots.txt` e sitemap configurati, nessun dominio placeholder.
- **Blog e territorio in italiano**: contenuti estesi e definitivi.

## Cosa è ancora placeholder / TODO

### Dati legali (bloccante prima del lancio)

`src/pages/privacy-policy.astro`:
- `[data da inserire]` (ultimo aggiornamento)
- `[Ragione sociale / nome e cognome del titolare]`
- `[Partita IVA / Codice Fiscale]`
- `[indirizzo email da attivare]`
- `[Periodo di conservazione da definire in base alle finalità]`
- `[Da dettagliare quando gli strumenti verranno effettivamente attivati]`

`src/pages/cookie-policy.astro`:
- `[data da inserire]` (ultimo aggiornamento)

### Traduzioni non definitive

Segnalate esplicitamente nei TODO come testo segnaposto da riscrivere in ottica SEO prima del lancio:

- `src/i18n/faq.ts` — 4 TODO: solo ES/EN/FR/DE (l'italiano è definitivo)
- `src/i18n/territorio.ts` — 28 TODO: stesso pattern, traduzioni ES/EN/FR/DE più corte/generiche rispetto al modello italiano

### Feature non ancora attive

Dichiarate "in arrivo" nel copy, non sono bug:

- `src/i18n/home.ts` — sezione chat: `chatCta: 'Coming soon'` ("presto potrai chattare con il nostro assistente virtuale")
- CTA home: prenotazione diretta sul sito annunciata come funzionalità futura ("per ora ti portiamo su Airbnb")

## Elenco completo commenti TODO nel codice

| File | Righe | Contenuto |
|---|---|---|
| `src/i18n/faq.ts` | 174, 234, 294, 354 | `// TODO: tradurre in ottica SEO prima di andare online, vedi versione IT per il modello` |
| `src/i18n/territorio.ts` | 69, 86, 103, 120, 174, 191, 208, 225, 279, 296, 313, 330, 384, 401, 418, 435, 489, 506, 523, 540, 594, 612, 630, 648, 704, 721, 738, 755 | stesso testo, per ciascun blocco lingua non-IT di ogni contenuto territorio |
| `src/views/FaqView.astro` | 11 | commento esplicativo che rimanda ai TODO in `faq.ts` (JSON-LD FAQPage generato solo in IT perché le altre lingue hanno testo segnaposto) |

Nessun `TODO`/`FIXME` trovato fuori da questi tre file (33 occorrenze totali).
