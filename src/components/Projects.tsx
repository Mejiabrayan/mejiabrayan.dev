import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from './ui/button';
import type { ProjectCardsProps } from 'types/contentful';

const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 place-items-baseline grid-auto-flow-row-dense auto-rows-minmax(150px, auto) sm:auto-rows-minmax(200px, auto) lg:auto-rows-minmax(250px, auto)'>
      {projects.map((project, index) => (
        <Card
          key={index}
          className={`row-span-1 rounded-xl border-2 border-slate-400/10 backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 dark:bg-neutral-900 ${
            (index === 3 || index === 6) && 'lg:col-span-2'
          }`}
        >
          <CardHeader>
            <CardTitle className='text-slate-50 text-center text-sm'>
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={project.image}
              alt={project.title}
              className='shadow rounded-md object-contain h-40 w-full'
            />
            <CardDescription className='font-mono mt-2 text-sm text-white text-center'>
              {project.description}
            </CardDescription>
          </CardContent>
          <CardFooter className='mt-2 flex items-center justify-center gap-4'>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-center'
            >
              <Button className='gap-2'>View Project</Button>
            </a>
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button className='gap-2' variant={'outline'}>
                  Case Study
                </Button>
              </a>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCards;
