// Le foto reali degli appartamenti vivono in src/assets/camere/ (non in public/) così Astro
// può generare WebP/AVIF + srcset tramite <Image>. listings.js le referenzia per path relativo
// (es. "magma-104/06.jpg"); questa mappa risolve quel path nell'ImageMetadata importata.
const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/camere/**/*.jpg', { eager: true });

export function getCamereImage(relPath: string): ImageMetadata {
  const mod = modules[`/src/assets/camere/${relPath}`];
  if (!mod) throw new Error(`Immagine camere non trovata: ${relPath}`);
  return mod.default;
}
