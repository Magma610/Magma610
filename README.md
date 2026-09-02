# Magma 610 Bed and More — sito web

Sito costruito con [Astro](https://astro.build), pronto per il deploy su Vercel.

## Struttura del progetto

```
src/
  layouts/Layout.astro       → header, footer, meta SEO, schema LodgingBusiness, cookie banner
  components/
    ListingCard.astro        → card annuncio stile Airbnb (usata in Home e /camere)
    AmenityIcon.astro        → icone dei servizi (wifi, cucina, ecc.)
    CookieBanner.astro       → banner consenso cookie GDPR
    LanguageSwitcher.astro   → selettore lingua per le pagine blog
  data/listings.js           → dati reali di Magma 102 e Magma 104 (da Airbnb)
  lib/
    blog.ts                  → lingue supportate, parsing id post, filtro auto-pubblicazione
    blog-ui.ts                → stringhe di interfaccia del blog nelle 5 lingue
  content/blog/{lingua}/*.md  → articoli del blog, uno per lingua (it, es, en, fr, de)
  pages/
    index.astro                → Homepage
    la-struttura.astro
    camere/index.astro
    territorio.astro
    contatti.astro
    privacy-policy.astro
    cookie-policy.astro
    blog/index.astro            → redirect a /it/blog (compatibilità vecchi link)
    [lang]/blog/index.astro     → indice blog per lingua (/it/blog, /es/blog, ecc.)
    [lang]/blog/[...slug].astro → template articolo singolo, multilingua
  styles/global.css           → design token (palette, font, spaziature)
public/images/logo/           → logo in tutte le versioni
.github/workflows/
  scheduled-rebuild.yml       → ricostruisce il sito ogni giorno per l'auto-pubblicazione
```

## Comandi

```bash
npm install       # installa le dipendenze
npm run dev        # sviluppo locale, http://localhost:4321
npm run build       # build di produzione → cartella dist/
npm run preview      # anteprima della build di produzione
```

## Novità di questo aggiornamento

### 1. Contatti reali
Indirizzo, telefono/WhatsApp e link a Google Maps aggiornati in `contatti.astro` e nello
schema `LodgingBusiness` (`Layout.astro`). Manca ancora: email, orari check-in/check-out
(segnaposto in attesa di conferma).

### 2. Conformità GDPR — struttura di base, NON consulenza legale
Aggiunto: banner cookie (`CookieBanner.astro`, blocca tutto ciò che non è essenziale finché
l'utente non sceglie), pagina `/privacy-policy`, pagina `/cookie-policy`.

**Importante**: i testi di queste due pagine sono un punto di partenza strutturale — vanno
fatti rivedere da un consulente legale o dal commercialista prima della pubblicazione. Mancano
ancora dati specifici dell'attività (ragione sociale, P.IVA, email dedicata) segnati tra
`[parentesi quadre]` nei file. Quando verrà integrato Google Analytics, andrà anche collegato
al consenso del banner (lo script di GA deve caricarsi solo se `window.magmaConsent === 'all'`
— vedi il commento in `CookieBanner.astro`).

### 3. Blog multilingua (IT, ES, EN, FR, DE)
- Ogni articolo vive in `src/content/blog/{lingua}/{slug}.md` — stesso slug in ogni lingua.
- URL: `/it/blog/...`, `/es/blog/...`, `/en/blog/...`, `/fr/blog/...`, `/de/blog/...`
- **Solo il blog è tradotto**, non il resto del sito (menu, homepage, ecc. restano in
  italiano) — tradurre tutto il sito è un progetto più ampio, da valutare a parte.
- L'unico articolo presente è tradotto nelle 5 lingue come esempio/struttura, ma il
  contenuto reale (oltre al titolo/estratto) va ancora fornito in tutte le lingue.
- Frequenza pianificata: **2 articoli al mese** (non più 1/settimana come nella bozza
  iniziale del piano editoriale — da aggiornare anche lì).

### 4. Auto-pubblicazione articoli
Un articolo con data futura nel frontmatter (`data: 2026-09-14`) **non genera nessuna
pagina** finché quella data non arriva — né in elenco né come URL diretto. Verificato con
test reale durante lo sviluppo.

**Punto tecnico da capire bene**: essendo un sito statico, questo filtro si applica al
momento della build, non "dal vivo". Perché un articolo compaia online esattamente alla
data giusta, il sito deve essere ricostruito dopo quella data — per questo è incluso
`.github/workflows/scheduled-rebuild.yml`, che ricostruisce il sito ogni notte.
**Va attivato una tantum** collegando un Deploy Hook di Vercel: istruzioni dettagliate
nei commenti in cima al file del workflow.

## TODO prima di andare online

1. **Foto**: le foto di Magma 102/104 sono ancora linkate dal CDN di Airbnb
   (`a0.muscache.com`). Vanno scaricate e messe in `public/images/camere/`,
   poi aggiornati i percorsi in `src/data/listings.js`.
2. **Foto del territorio**: foto stock (Unsplash), temporanee.
3. **Testi segnaposto**: "La Struttura", email contatti, orari check-in/out,
   dati legali in Privacy/Cookie Policy.
4. **Contenuti blog**: solo 1 articolo su ~2 al mese pianificati; da tradurre
   integralmente (non solo titolo/estratto) in tutte le lingue.
5. **Deploy Hook Vercel**: da collegare per l'auto-pubblicazione (vedi sopra).
6. **Booking diretto**: bottoni "Prenota" puntano ad Airbnb (`src/data/listings.js`,
   campo `airbnbUrl`) — aggiornare quando pronto un booking engine.
7. **Analytics**: Google Analytics 4 non ancora integrato (va collegato al consenso
   del cookie banner quando aggiunto).
8. **Chat AI**: non ancora integrata.
9. **Dominio**: registrato su Aruba — da puntare a Vercel via DNS.

## Palette (in `src/styles/global.css`)

| Token | Colore | Uso |
|---|---|---|
| `--basalto` | `#1C1917` | testi, struttura |
| `--lava` | `#C4401E` | azioni, CTA |
| `--azzurro` | `#53657E` | informazioni (icone, dati, bottoni secondari) |
| `--ginestra` | `#A8973C` | dettagli decorativi |
| `--pomice` | `#E8E0D2` | sfondi caldi |
