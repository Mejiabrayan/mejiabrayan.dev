import React, { useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowLeft, Music, Home, Code, User } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

const transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.2,
};

function Button({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      className='relative flex h-9 shrink-0 scale-100 select-none appearance-none items-center hover:text-primary-accent justify-center rounded-lg px-3 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function MenuComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div
        className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50'
        ref={containerRef}
      >
        <div className='rounded-xl border border-white/10 bg-[#08090B] text-white shadow-black'>
          <motion.div
            animate={{
              width: isOpen ? '300px' : 'auto',
            }}
            initial={false}
          >
            <div className='overflow-hidden p-3'>
              {!isOpen ? (
                <div className='flex items-center space-x-2'>
                  <Button ariaLabel='Home'>
                    <a href='/' className='flex items-center space-x-2'>
                      <Home className='h-5 w-5' />
                      <span>Home</span>
                    </a>
                  </Button>
                  <Button ariaLabel='Blogs'>
                    <a href='/blogs' className='flex items-center space-x-2'>
                      <Code className='h-5 w-5' />
                      <span>Blogs</span>
                    </a>
                  </Button>
                  <div className='w-px h-6 bg-white/10'></div>
                  <Button
                    onClick={() => setIsOpen(true)}
                    ariaLabel='Open music player'
                  >
                    <div className='flex items-center space-x-2'>
                      <Music className='h-5 w-5' />
                      <span>Music</span>
                    </div>
                  </Button>
                  <Button ariaLabel='Profile'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-5 h-5 rounded-full overflow-hidden'>
                        <img
                          src='/avatar.webp'
                          alt='Profile'
                          className='w-full h-full object-cover grayscale'
                        />
                      </div>
                      <span>Profile</span>
                    </div>
                  </Button>
                </div>
              ) : (
                <div className='flex items-center space-x-2'>
                  <Button
                    onClick={() => setIsOpen(false)}
                    ariaLabel='Close music player'
                  >
                    <ArrowLeft className='h-5 w-5' />
                  </Button>
                  <div className='relative w-full h-9'>
                    <MusicPlayer />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}