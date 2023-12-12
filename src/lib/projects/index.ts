
interface ProjectItem {
    title: string;
    image: string;
    description: string;
    link: string;
    caseStudy?: string;
  }
  
  export const projectsItems: ProjectItem[] = [
    {
      title: 'RapidDrafts.com',
      image: '/rapiddrafts.png',
      description:
        'RapidDrafts is your comprehensive drafting assistant, designed to streamline your content creation process with speed and precision.',
      link: 'https://www.rapiddrafts.com',
    },
    {
      title: 'Time-Tracker App',
      image: '/time-tracker.png',
      description:
        'Time-Tracker is a time management app that allows users to track their time spent on various tasks.',
      link: 'https://time-tracker-esorht4fr-mejiabrayan.vercel.app/auth',
    },
    {
      title: 'LogoAiCreator.com',
      image: '/logoaicreator.png',
      description: `LogoAIcreator.com is an innovative SaaS platform utilizing AI, specifically OpenAI's DALL-E9 (subject to change), to craft striking logos for businesses and brands. Our tech-savvy approach, powered by Next.js and React, ensures a user-friendly experience.
        `,
      link: 'https://www.logoaicreator.com',
    },
    {
      title: 'Chat App',
      image: '/chatty-app.png',
      description:
        'This is a chat app for mobile devices built with React-Native. It provides users with a chat interface where they can send/receive text messages and images as well as share their location. It was the final project for my full-stack web development bootcamp.',
      link: 'https://github.com/Mejiabrayan/Chatty-app',
      caseStudy:
        'https://github.com/Mejiabrayan/chatty-app-case-study/blob/main/Minimal%20Company%20Case%20Study.pdf',
    },
    {
      title: 'Movie API',
      image: '/mymovies.png',
      description: `The "myMovies" application is a full-stack JavaScript project built as part of CareerFoundry's Full-Stack Web Development Course. It is designed to demonstrate the mastery of MERN stack development.`,
      link: 'https://github.com/Mejiabrayan/MOVIES-REST-API',
      caseStudy:
        'https://github.com/Mejiabrayan/myMovies-case-study/blob/main/Case_Study_Mejia_Brayan.pdf',
    },
    {
      title: 'MeetUp App',
      image: '/meetup.png',
      description:
        'Find Events Near You & Connect With Like-Minded Developers With MeetUp App.',
      link: 'https://github.com/Mejiabrayan/MeetUp-App',
      caseStudy: 'https://mycasestudies.s3.us-east-2.amazonaws.com/Minimal+Company+Case+Study-1+(1).pdf',
    },
  ];