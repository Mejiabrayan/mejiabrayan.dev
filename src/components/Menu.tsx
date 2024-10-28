import React, { useRef, useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowLeft, Music, Home, Code, Library } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

// Animation configurations
const transition = {
  type: 'spring',
  bounce: 0.4,
  duration: 0.5,
  damping: 14,
  velocity: 100,
};

const menuAnimations = {
  stagger: {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  },
  item: {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
    closed: {
      y: 30,
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 30,
      },
    },
  },
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({ children, onClick, disabled, ariaLabel }: ButtonProps) => (
  <button
    className='group relative flex h-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg px-3 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer'
    type='button'
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

const menuItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/work', icon: Code },
  { label: 'Blogs', href: '/blogs', icon: Library },
];

const Divider = () => (
  <motion.div variants={menuAnimations.item} className='w-px h-6 bg-white/10' />
);

export default function MenuComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const renderMenuItem = (item: (typeof menuItems)[0], index: number) => (
    <React.Fragment key={item.label}>
      <motion.div variants={menuAnimations.item}>
        <Button ariaLabel={item.label}>
          <a href={item.href} className='flex items-center gap-2 group-hover:opacity-80 transition-opacity'>
            <item.icon className='h-5 w-5' />
            <span className='hidden sm:inline'>{item.label}</span>
          </a>
        </Button>
      </motion.div>
      {index < menuItems.length - 1 && <Divider />}
    </React.Fragment>
  );

  return (
    <MotionConfig transition={transition}>
      <div
        className='fixed top-10 left-1/2 transform -translate-x-1/2 z-50'
        ref={containerRef}
      >
        <div className='rounded-2xl outline-white outline-4 ring-2 ring-white/10 bg-[#050506] text-white'>
          <motion.div
            animate={{ width: isOpen ? '300px' : 'auto' }}
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
                    variants={menuAnimations.stagger}
                  >
                    {menuItems.map(renderMenuItem)}
                    <Divider />
                    <motion.div variants={menuAnimations.item}>
                      <Button
                        onClick={() => setIsOpen(true)}
                        ariaLabel='Open music player'
                      >
                        <div className='flex items-center gap-2 group-hover:opacity-80 transition-opacity'>
                          <Music className='h-5 w-5' />
                          <span className='hidden sm:inline'>Music</span>
                        </div>
                      </Button>
                    </motion.div>
                    <motion.div variants={menuAnimations.item}>
                      <div className='flex items-center gap-2 px-2 group-hover:opacity-80 transition-opacity'>
                        <div className='w-8 h-8 rounded-lg overflow-hidden'>
                          <img
                            src='/profile.jpeg'
                            alt='Profile'
                            className='w-full h-full object-cover grayscale'
                            draggable={false}
                          />
                        </div>
                        <span className='hidden sr-only sm:inline'>Profile</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <Button
                      onClick={() => setIsOpen(false)}
                      ariaLabel='Close music player'
                    >
                      <ArrowLeft className='h-6 w-6 group-hover:opacity-80 transition-opacity' />
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
