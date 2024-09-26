import React, { useRef, useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowLeft, Music, Home, Code, Library } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

const transition = {
  type: 'spring',
  bounce: 0.3,
  duration: 0.3,
};

const staggerMenuItems = {
  open: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
      duration: 0.2,
    },
  },
  closed: {
    y: 20,
    x: 0,
    opacity: 0,
    scale: 0.9,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
      duration: 0.2,
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

const menuItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/work', icon: Code },
  { label: 'Blogs', href: '/blogs', icon: Library },
];

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
        <div className='rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md'>
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
                    {menuItems.map((item, index) => (
                      <React.Fragment key={item.label}>
                        <motion.div variants={menuItemVariants}>
                          <Button ariaLabel={item.label}>
                            <a href={item.href} className='flex items-center space-x-2'>
                              <item.icon className='h-5 w-5 text-white' />
                              <span className='hidden sm:inline'>{item.label}</span>
                            </a>
                          </Button>
                        </motion.div>
                        {index < menuItems.length - 1 && <motion.div variants={menuItemVariants} className='w-px h-6 bg-white/10'></motion.div>}
                      </React.Fragment>
                    ))}
                    <motion.div variants={menuItemVariants} className='w-px h-6 bg-white/10'></motion.div>
                    <motion.div variants={menuItemVariants}>
                      <Button
                        onClick={() => setIsOpen(true)}
                        ariaLabel='Open music player'
                      >
                        <div className='flex items-center space-x-2 text-white hover:text-blue-700'>
                          <Music className='h-5 w-5 text-white' />
                          <span className='hidden sm:inline'>Music</span>
                        </div>
                      </Button>
                    </motion.div>
                    <motion.div variants={menuItemVariants} className='w-px h-6 bg-white/10'></motion.div>
                    <motion.div variants={menuItemVariants}>
                      <div className='flex items-center space-x-2'>
                        <div className='w-9 h-9 rounded-full overflow-hidden'>
                          <img
                            src='/avatar.webp'
                            alt='Profile'
                            className='w-full h-full object-cover grayscale'
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
                      <ArrowLeft className='h-5 w-5 text-white' />
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
