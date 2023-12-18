import { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import type { ProjectCardsProps } from 'types/contentful';

const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 place-items-center grid-auto-flow-row-dense auto-rows-minmax(150px, auto) sm:auto-rows-minmax(200px, auto) lg:auto-rows-minmax(250px, auto)'>
      {projects.map((project, index) => (
        <ProjectCardItem key={index} project={project} index={index} />
      ))}
    </div>
  );
};

const ProjectCardItem: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative'
    >
      <div
        className='pointer-events-none absolute  -inset-0 opacity-0 transition duration-500 rounded-xl'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(201, 201, 201, 0.25), transparent 40%)`,
        }}
      />
      <Card
        className={`row-span-1 hover:shadow-lg rounded-xl p-4 h-full w-full backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-700 shadow-sm ${
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
    </div>
  );
};

export default ProjectCards;
