
import type { BlogPost } from '../contentful';
import { contentfulClient } from '../contentful';

export async function fetchContentfulPosts() {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: 'blogPost',
  });

  return entries.items.map((item) => {
    const { title, date, description, slug } = item.fields;
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      date: new Date(date).toLocaleDateString(),
    };
  });
}
