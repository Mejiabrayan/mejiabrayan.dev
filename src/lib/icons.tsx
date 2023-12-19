import React from 'react';
import { FaGithub, FaGithubSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { socialLinks } from 'config/social';
import { GithubIcon, Linkedin, Twitter } from 'lucide-react';

type SocialMediaIconProps = {
  size?: number;
  color?: string;
};

export const SocialMediaIcons: React.FC<SocialMediaIconProps> = ({
  size = 24,
  color = 'currentColor',
}) => {
  // Mapping icons to their respective platforms
  const icons: { [key: string]: any } = {
    github: GithubIcon,
    linkedIn:Linkedin,
    twitter: Twitter,
  };

  return (
    <div className='social-media-icons text-white inline-flex gap-2'>
      {socialLinks.map((link, index) =>
        Object.entries(link).map(([key, url]) => {
          const IconComponent = icons[key];
          return (
            <a
              key={index + key}
              href={url as string}
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <IconComponent size={size} color={color} />
            </a>
          );
        })
      )}
    </div>
  );
};
