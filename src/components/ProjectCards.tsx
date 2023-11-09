import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { projectsItems } from '@/lib/projects';

export default function ProjectCards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
      {projectsItems.map((project, index) => (
        // Maybe make the cards a fixed width and height
        <Card
          key={index}
          className='border border-gray-300 rounded-md p-4 hover:shadow-lg '
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
          <CardFooter className='mt-2 flex items-center justify-center gap-4'>
            <a
              href={`/portfolio/${project.title
                .toLowerCase()
                .split(' ')
                .join('-')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-center' // Center the text for the anchor element
            >
              <Button className='gap-2'>
                {' '}
                {/* Reduced gap for consistency */}
                View Project
              </Button>
            </a>
            {project.caseStudy && ( // Conditional rendering for the Case Study button
              <a
                href={project.caseStudy}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button className='gap-2' variant={'outline'}>
                  {' '}
                  {/* Consistent gap as the View Project button */}
                  Case Study
                </Button>
              </a>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
