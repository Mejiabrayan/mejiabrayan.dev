import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { socialLinks } from 'config/socialLinks';

type SocialMediaIconProps = {
  size?: number;
  color?: string;
};

export const SocialMediaIcons: React.FC<SocialMediaIconProps> = ({
  size = 24,
  color = 'currentColor',
}) => {
  // Spring animation configuration
  const spring = {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  };

  // Hover animation for the icon
  const iconVariants = {
    hover: { scale: 1.1, y: -5, transition: spring },
    tap: { scale: 0.9, transition: spring },
  };

  // Mapping icons to their respective platforms
  const icons: { [key: string]: any } = {
    github: FaGithub,
    linkedIn: FaLinkedinIn,
    twitter: FaTwitter,
  };

  return (
    <div className='social-media-icons text-white inline-flex gap-2'>
      {socialLinks.map((link, index) =>
        Object.entries(link).map(([key, url]) => {
          const IconComponent = icons[key];
          return (
            <motion.a
              key={index + key}
              href={url as string}
              target='_blank'
              rel='noopener noreferrer'
              variants={iconVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <IconComponent size={size} color={color} />
            </motion.a>
          );
        })
      )}
    </div>
  );
};
