export interface ProjectItem {
  title: string;
  image: any | React.ReactNode;
  description: string;
  slug: string;
  caseStudy?: string;
  date: string;
  className?: string;
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
