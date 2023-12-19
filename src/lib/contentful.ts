import contentful from 'contentful';
import type { EntryFieldTypes } from 'contentful';

export interface BlogTypes {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description?: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
}

export interface ProjectTypes {
  contentTypeId: 'project';
  fields: {
    title: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    content: EntryFieldTypes.RichText;
    image: EntryFieldTypes.Object;
    url: EntryFieldTypes.Text;
    caseStudy: EntryFieldTypes.Object;
    slug: EntryFieldTypes.Text;
  };
}

// creates a new Contentful client instance
export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
