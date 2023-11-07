import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';

const projectsItems = [
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
  },
  {
    title: 'Movie API',
    image: '/movie-api.png',
    description: `The "myMovies" application is a full-stack JavaScript project built as part of CareerFoundry's Full-Stack Web Development Course. It is designed to demonstrate the mastery of MERN stack development.`,
  },
];

export default function ProjectCards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
      {projectsItems.map((project, index) => (
        <Card
          key={index}
          className='border border-gray-300 rounded-md p-4 hover:shadow-lg'
        >
          <CardHeader>
            <CardTitle className='text-[#292929]'>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={project.image}
              alt={project.title}
              className='shadow rounded-md w-full h-auto'
            />
            <CardDescription className='mt-2 text-base'>
              {project.description}
            </CardDescription>
          </CardContent>
          <div className='mt-2 flex items-center justify-between gap-5'>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              <Button className='mx-auto gap-3'>
                View Project
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor  '
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-github'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                  <path d='M9 18c-4.51 2-5-2-7-2' />
                </svg>
              </Button>
            </a>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <Button className='mx-auto gap-3' variant={'outline'}>
                Case Study
              </Button>
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
