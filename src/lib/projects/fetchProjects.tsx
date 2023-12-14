import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { ProjectTypes } from '../contentful';
import { contentfulClient } from '../contentful';

export async function fetchProjects() {
  const entries = await contentfulClient.getEntries<ProjectTypes>({
    content_type: 'project',
  });

  return entries.items.map((item) => {
    const { caseStudy, content, date, image, slug, title, url } =
        item.fields;
    return {
      caseStudy: item.fields.caseStudy,
      content: documentToHtmlString(item.fields.content),
      date: new Date(date).toLocaleDateString(),
      image: item.fields.image,
      slug: item.fields.slug,
      title: item.fields.title,
    };
  });
}
