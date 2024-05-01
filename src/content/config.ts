// Zod datatypes
import { z, defineCollection } from 'astro:content';

//HTML Collection
const htmlCollection =  defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    value: z.string(),
    content: z.string(),
    code:z.string().array().optional(),
    subcontent: z.array(z.object({
      id: z.number(),
      title: z.string(),
      content: z.string(),
      examples: z.string().array().optional()
    }))
  })
})
 
//Export project collection
export const collections = {
  'HTML': htmlCollection,
};