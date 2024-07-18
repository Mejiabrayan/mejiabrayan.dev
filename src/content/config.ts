import { z, defineCollection, reference } from 'astro:content';

export const collection = {
  blogs: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string().max(60, {
        message: 'Title nust be 60 characters or less',
      }),
      description: z.string().max(160, {
        message: 'Description must be 160 characters or less',
      }),
      image: z.string(),
      attributedImg: z.string().optional(),
      date: z.date(),
      author: z.string(),
      relatedPosts: z.array(reference('blogs')).optional(),
    }),
  }),
};


