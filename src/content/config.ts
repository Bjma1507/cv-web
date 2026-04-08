import { z, defineCollection } from 'astro:content';

// 1. Definimos la colección de "Portfolio"
const portfolioCollection = defineCollection({
  type: 'content', // Indicamos que será contenido escrito (Markdown/MDX)
  schema: z.object({
    // Aquí le decimos a Astro qué datos DEBE tener cada proyecto
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()), // Esto asegura que las etiquetas sean una lista
    role: z.string(),
    
    // El .optional() significa que si un proyecto no tiene link en vivo, no pasa nada
    liveUrl: z.string().url().optional(), 
  })
});

// 2. Exportamos la colección para que Astro la reconozca
export const collections = {
  'portfolio': portfolioCollection,
};