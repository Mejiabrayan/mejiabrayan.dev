import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/styles/animations/animation';

const SlideUp = ({ children }: React.PropsWithChildren) => {
  return (
    <motion.main variants={slideUp} initial='initial' animate='enter'>
      {children}
    </motion.main>
  );
};

export default SlideUp;
