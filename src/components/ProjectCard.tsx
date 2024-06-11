import { Link } from 'lucide-react';
import type { MarkdownInstance } from 'astro';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface ProjectCardItemProps {
  project: MarkdownInstance<Record<string, any>>;
}

export const ProjectCard: React.FC<{
  projects: MarkdownInstance<Record<string, any>>[];
}> = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center mt-8'>
      {projects.map((project, index) => (
        <ProjectComponent key={index} project={project} index={index} />
      ))}
    </div>
  );
};

const ProjectComponent: React.FC<ProjectCardItemProps & { index: number }> = ({
  project,
  index,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const colSpanClasses = () => {
    switch (index % 3) {
      case 0:
        return 'sm:col-span-2 md:col-span-3 lg:col-span-4';
      case 1:
        return 'sm:col-span-1 md:col-span-1 lg:col-span-2';
      case 2:
        return 'sm:col-span-2 md:col-span-3 lg:col-span-4';
      default:
        return '';
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className={`border border-white/20 rounded-xl bg-neutral-950 relative after:absolute after:top-0 after:right-5 after:h-px after:w-80 after:bg-gradient-to-l after:from-transparent after:via-white/30 after:via-10% after:to-transparent ${colSpanClasses()}`}
    >
      <div className='p-8 space-y-2'>
        <motion.div
          className='pointer-events-none bottom-0 absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
          style={{
            background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)`,
          }}
        />
        <img
        
          src={project.frontmatter.cover}
          className='rounded-xl h-48 w-full object-cover mb-6'
          draggable={false}
          alt={project.frontmatter.title}
        />
        <div className='flex items-start justify-between'>
          <a
            href={`/projects/content/${
              project.file?.split('/').pop()?.split('.')[0]
            }`}
          >
            <h3 className='text-accents-7 text-lg md:text-2xl lg:text-2xl font-bold mb-2 hover:text-primary-accent cursor-pointer'>
              {project.frontmatter.title}
            </h3>
          </a>
          <Link size='15' className='text-accents-6' />
        </div>
        <p className='text-base text-accents-6 mb-6'>
          {project.frontmatter.overview}
        </p>
      </div>
    </div>
  );
};
