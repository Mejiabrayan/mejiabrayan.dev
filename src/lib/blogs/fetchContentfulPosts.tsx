
import type { BlogTypes } from '../contentful';
import { contentfulClient } from '../contentful';

export async function fetchContentfulPosts() {
  const entries = await contentfulClient.getEntries<BlogTypes>({
    content_type: 'blogPost',
  });

  return entries.items.map((item) => {
    const {  date, } = item.fields;
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      date: new Date(date).toLocaleDateString(),
    };
  });
}
