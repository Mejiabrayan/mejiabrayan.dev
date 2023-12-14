export interface ProjectItem {
  title: string;
  image: any;
  description: string;
  slug: string;
  caseStudy?: string;
}

export interface ProjectCardsProps {
  projects: ProjectItem[];
}

export interface BlogItems {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export interface BlogCardsProps {
  posts: BlogItems[];
}
