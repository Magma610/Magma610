import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Ogni articolo vive in src/content/blog/{lingua}/{slug}.md
// Il loader "glob" genera un id tipo "it/etna-vicino-di-casa" — la lingua
// e lo slug si ricavano da lì (vedi src/lib/blog.ts).
const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: z.object({
    titolo: z.string(),
    data: z.date(),
    estratto: z.string(),
    immagine: z.string(),
    tema: z.string().optional(),
  }),
});

export const collections = { blog };
