import React, { useRef, useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowLeft, Music, Home, Code, Library } from 'lucide-react';
import MusicPlayer from './MusicPlayer';



const transition = {
  type: 'spring',
  bounce: 0.4,
  duration: 0.4,
};

const staggerMenuItems = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 60, 
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
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
      className='relative flex h-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg px-3 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div
        className='fixed top-10 left-1/2 transform -translate-x-1/2 z-50'
        ref={containerRef}
      >
        <div className='rounded-2xl border border-white/10 bg-black/35 text-white backdrop-blur-md'>
          <motion.div
            animate={{
              width: isOpen ? '300px' : 'auto',
            }}
            initial={false}
          >
            <div className='overflow-hidden p-3'>
              <AnimatePresence initial={false}>
                {!isOpen ? (
                  <motion.div
                    className='flex items-center space-x-2'
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={staggerMenuItems}
                  >
                    <motion.div variants={menuItemVariants}>
                      <Button ariaLabel='Home'>
                        <a href='/' className='flex items-center space-x-2'>
                          <Home className='h-5 w-5' />
                          <span className='hidden sm:inline'>Home</span>
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div variants={menuItemVariants}>
                      <Button ariaLabel='Blogs'>
                        <a
                          href='/blogs'
                          className='flex items-center space-x-2'
                        >
                          <Library className='h-5 w-5' />
                          <span className='hidden sm:inline'>Blogs</span>
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div variants={menuItemVariants}>
                      <div className='w-px h-6 bg-white/10'></div>
                    </motion.div>
                    <motion.div variants={menuItemVariants}>
                      <Button
                        onClick={() => setIsOpen(true)}
                        ariaLabel='Open music player'
                      >
                        <div className='flex items-center space-x-2'>
                          <Music className='h-5 w-5' />
                          <span className='hidden sm:inline'>Music</span>
                        </div>
                      </Button>
                    </motion.div>
                    <motion.div variants={menuItemVariants}>
                      <div className='flex items-center space-x-2'>
                        <div className='w-8 h-8 rounded-full overflow-hidden'>
                          <img
                            src='/bluetwo.jpeg'
                            alt='Profile'
                            className='w-full h-full object-cover '
                          />
                        </div>
                        <span className='sr-only sm:inline'>Profile</span>
                      </div>
                    </motion.div>
                  </motion.div>
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
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
