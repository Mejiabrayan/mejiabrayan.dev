export interface ProjectItem {
    title: string;
    image: string;
    description: string;
    link: string;
    caseStudy?: string;
  }
  
  export interface ProjectCardsProps {
    projects: ProjectItem[];
 

  }
  