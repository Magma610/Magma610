import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titolo: z.string(),
    data: z.date(),
    estratto: z.string(),
    immagine: z.string(),
    tema: z.string().optional(),
  }),
});

export const collections = { blog };
