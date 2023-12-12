import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

type SocialMediaIconProps = {
  size?: number;
  color?: string;
};

export const SocialMediaIcons: React.FC<SocialMediaIconProps> = ({ size = 24, color = 'currentColor' }) => {
  // Spring animation configuration
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 10
  };

  // Hover animation for the icon
  const iconVariants = {
    hover: { scale: 1.1, y: -5, transition: spring },
    tap: { scale: 0.9, transition: spring }
  };

  return (
    <div className='social-media-icons text-white inline-flex gap-2'>
      <motion.a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <FaGithub size={size} color={color} />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <FaLinkedinIn size={size} color={color} />
      </motion.a>
      <motion.a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <FaTwitter size={size} color={color} />
      </motion.a>
    </div>
  );
};
