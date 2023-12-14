import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import type { ProjectCardsProps } from 'types/contentful';

const ProjectCards: React.FC<ProjectCardsProps> = ({ projects } ) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 place-items-center grid-auto-flow-row-dense auto-rows-minmax(150px, auto) sm:auto-rows-minmax(200px, auto) lg:auto-rows-minmax(250px, auto)'>
      {projects.map((project, index) => (
        <Card
          key={index}
          className={`row-span-1 transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg rounded-xl p-4 h-full w-full backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-700 shadow-sm ${
            (index === 3 || index === 6) && 'lg:col-span-2'
          }`}
        >
          <CardHeader>
            <CardTitle className='text-white text-center text-2xl font-semibold leading-tight'>
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={'https:' + project.image.fields.file.url}
              alt={project.title}
              className='rounded-lg object-cover h-40 w-full mb-4'
            />
            <CardDescription className='text-gray-300 text-center text-sm'>
              {project.description}
            </CardDescription>
          </CardContent>
          <CardFooter className='mt-4 flex items-center justify-center gap-4'>
            <a
              href={`projects/${project.slug}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-center text-white bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out'
            >
              View Project
            </a>
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-center text-white bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out'
              >
                Case Study
              </a>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCards;
