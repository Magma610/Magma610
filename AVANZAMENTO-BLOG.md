# Avanzamento blog — Magma 610

Aggiornato al 5 settembre 2026 (branch `main`).

## Stato pubblicazione

Il sito è statico: un articolo compare online solo se la sua `data` è oggi o nel passato al momento della build (`src/lib/blog.ts`, `isPublished`). **Nessuno dei 24 articoli è ancora pubblicato**: il primo (14 settembre 2026) manca di 10 giorni.

Il workflow che dovrebbe ricostruire il sito ogni notte per pubblicare gli articoli in automatico (`.github/workflows/scheduled-rebuild.yml`) richiede il secret GitHub `VERCEL_DEPLOY_HOOK_URL`. Verificare che sia stato configurato, altrimenti gli articoli non compariranno online da soli alla loro data.

## Calendario e stato traduzioni

Legenda: ✅ tradotto e completo — ⏳ solo frontmatter tradotto, corpo segnaposto con commento `TODO`

| # | Data | Articolo | IT | ES | EN | FR | DE |
|---|---|---|---|---|---|---|---|
| 1 | 2026-09-14 | L'Etna, il vostro vicino di casa | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2 | 2026-09-28 | Trekking sull'Etna: i sentieri per ogni livello | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3 | 2026-10-12 | Cantine dell'Etna: un'esperienza da vivere | ✅ | ✅ | ✅ | ✅ | ✅ |
| 4 | 2026-10-26 | Una gita alle Gole dell'Alcantara | ✅ | ✅ | ✅ | ✅ | ✅ |
| 5 | 2026-11-09 | Vicini al Centro Cuore Morgagni di Pedara | ✅ | ✅ | ✅ | ✅ | ✅ |
| 6 | 2026-11-23 | L'Etna d'autunno: i primi cappucci di neve | ✅ | ✅ | ✅ | ✅ | ✅ |
| 7 | 2026-12-07 | Perché scegliere Magma 610 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 8 | 2026-12-21 | Taormina, l'eleganza siciliana a portata di mano | ✅ | ✅ | ✅ | ✅ | ✅ |
| 9 | 2027-01-04 | In moto tra Etna e costa ionica | ✅ | ✅ | ✅ | ✅ | ✅ |
| 10 | 2027-01-18 | Catania barocca, a due passi da Magma 610 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 11 | 2027-02-01 | Vendemmia sull'Etna | ✅ | ✅ | ✅ | ✅ | ✅ |
| 12 | 2027-02-15 | Prenota diretto, viaggia meglio | ✅ | ✅ | ✅ | ✅ | ✅ |
| 13 | 2027-03-01 | Vini dell'Etna: cosa sapere prima di una degustazione | ✅ | ✅ | ✅ | ✅ | ✅ |
| 14 | 2027-03-15 | In bici sull'Etna: percorsi per tutti i livelli | ✅ | ✅ | ✅ | ✅ | ✅ |
| 15 | 2027-03-29 | Gole dell'Alcantara: quando andare e cosa portare | ✅ | ✅ | ✅ | ✅ | ✅ |
| 16 | 2027-04-12 | Un soggiorno tranquillo vicino al Centro Cuore Morgagni | ✅ | ✅ | ✅ | ✅ | ✅ |
| 17 | 2027-04-26 | Un giorno a Taormina: itinerario da Pedara | ✅ | ✅ | ✅ | ✅ | ✅ |
| 18 | 2027-05-10 | Un giorno a Catania: mercati, piazze e street food | ✅ | ✅ | ✅ | ✅ | ✅ |
| 19 | 2027-05-24 | Family friendly: le Gole dell'Alcantara con i bambini | ✅ | ✅ | ✅ | ✅ | ✅ |
| 20 | 2027-06-07 | Cosa portare per un soggiorno prolungato (Centro Cuore Morgagni) | ✅ | ✅ | ✅ | ✅ | ✅ |
| 21 | 2027-06-21 | Cicloturismo sull'Etna: dove noleggiare una bici | ✅ | ✅ | ✅ | ✅ | ✅ |
| 22 | 2027-07-05 | Isola Bella e il Teatro Greco: cosa non perdere | ✅ | ✅ | ✅ | ✅ | ✅ |
| 23 | 2027-07-19 | Catania by night: cosa fare la sera | ✅ | ✅ | ✅ | ✅ | ✅ |
| 24 | 2027-08-02 | Magma 102 e Magma 104: quale appartamento scegliere | ✅ | ✅ | ✅ | ✅ | ✅ |

**Totali**: 24/24 articoli IT completi · 24/24 ES completi · 24/24 EN completi · 24/24 FR completi · 24/24 DE completi.

## Prossimi passi

1. **Attivare l'auto-pubblicazione**: verificare/configurare il secret `VERCEL_DEPLOY_HOOK_URL` su GitHub (vedi istruzioni in cima a `.github/workflows/scheduled-rebuild.yml`).

## Note

- `perche-scegliere-magma-610.md` ha un corpo testo sotto i 2.000 caratteri (in tutte le lingue) perché usa un testo italiano fisso fornito e approvato in precedenza, più corto dello standard richiesto per gli altri articoli. Non è un errore di traduzione.
- Le pagine territorio (`src/i18n/territorio.ts`, 7 pagine) e la FAQ (`src/i18n/faq.ts`, 24 domande) sono tradotte in tutte e 5 le lingue (IT/ES/EN/FR/DE).
