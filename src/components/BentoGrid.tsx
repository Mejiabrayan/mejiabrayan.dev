import { BentoGrid, BentoGridItem } from '@/components/bento-grid';

import type { ProjectCardsProps } from 'types/contentful';
import { motion } from 'framer-motion';

export const BentoGrids: React.FC<ProjectCardsProps> = ({ projects }) => {
  const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.04 * index,
      },
    }),
  };

  return (
    <BentoGrid className='max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto md:auto-rows-[20rem]'>
      {projects.map((project, index) => (
        <motion.div 
        variants={fadeAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
        custom={index}
        
          key={index}
        >
        <BentoGridItem
          title={project.title}
          content={project.description}
          date={project.date}
          image={<ImageComponent src={project.image} alt={project.title} />}
          slug={project.slug}
          className='md:col-span-1'
        />
        </motion.div>
      ))}
    </BentoGrid>
  );
};

const ImageComponent = ({ src, alt }: any) => (
  <img
    src={'https:' + src?.fields?.file?.url}
    alt={alt}
    className='flex flex-1 w-full h-full min-h-[9rem] rounded bg-dot-white/[0.2] border border-white/[0.2] bg-black'
  />
);
