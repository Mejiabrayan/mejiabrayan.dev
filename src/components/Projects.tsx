import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface ProjectProps {
  title?: string;
  content?: any;
  description?: string | any;
  image?: string | any;
}

const Projects: React.FC<ProjectProps> = ({ title, image, description }) => {
  return (
    <div className='space-y-6 p-4 md:p-6'>
      <div className='shadow-lg rounded-lg p-4 relative'>
        <h3 className='font-bold text-xl text-white mb-4'>{title}</h3>

        <div className='border-1 border-gray-300 rounded-lg overflow-hidden relative'>
          <motion.img
            alt=''
            className='object-cover w-full h-48 aspect-auto'
            height='300'
            width='500'
            src={'https://fakeimg.pl/600x400'} // Replace with actual image prop
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
          />
          <motion.div
            className='absolute inset-0 flex items-center justify-center p-4'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className='text-sm text-white leading-tight'>{description}</p>
          </motion.div>
        </div>

        <div className='flex justify-end mt-2'>
          <Button variant={'link'} className='text-white'>
        View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
