import React from 'react';
import { motion } from 'framer-motion';

const FadeInWrapper = ({ children }:
    React.PropsWithChildren<{}>
    ) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }} // Adjust the duration as needed
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
