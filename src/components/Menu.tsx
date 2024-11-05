import React, { useRef, useState, useEffect } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import useClickOutside from '~/hooks/useClickOutside';
import { ArrowLeft, Music, Home, Code, Library } from 'lucide-react';
import MusicPlayer from './MusicPlayer';
import { menuTransition, menuAnimations } from '~/lib/animations';

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
  { label: 'Projects', href: '/projects', icon: Code },
  { label: 'Blogs', href: '/blogs', icon: Library },
];

const Divider = () => (
  <motion.div variants={menuAnimations.item} className='w-px h-6 bg-white/10' />
);

const MenuContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        containerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className='fixed top-10 left-1/2 transform -translate-x-1/2 z-50'
      ref={containerRef}
      tabIndex={-1}
    >
      {children}
    </div>
  );
};

const MenuContent = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const renderMenuItem = (item: (typeof menuItems)[0], index: number) => (
    <React.Fragment key={item.label}>
      <motion.div variants={menuAnimations.item}>
        <Button ariaLabel={item.label}>
          <a
            href={item.href}
            className='flex items-center gap-2 group-hover:opacity-80 transition-opacity'
          >
            <item.icon className='h-5 w-5 md:h-4 md:w-4' />
            <span className='inline lg:inline md:hidden sm:inline text-sm'>
              {item.label}
            </span>
          </a>
        </Button>
      </motion.div>
      {index < menuItems.length - 1 && <Divider />}
    </React.Fragment>
  );

  return (
    <div className='rounded-2xl bg-[var(--alternative-black)] text-[var(--text-accent)] relative shadow-2xl'>
      <div className='absolute -inset-1 rounded-xl border opacity-0 focus-within:opacity-100 transition-opacity' />
      <div className='absolute inset-px rounded-2xl !outline-none' />

      <motion.div
        animate={{ 
          width: isOpen ? '320px' : 'auto',
          transition: {
            type: 'spring',
            stiffness: 400,
            damping: 30
          }
        }}
        initial={false}
        className='relative ring-[0.5px] ring-white/10 rounded-2xl'
      >
        <div className='overflow-hidden p-3'>
          <AnimatePresence mode='wait'>
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
                      <Music className='h-4 w-4' />
                      <span className='inline lg:inline md:hidden sm:inline text-sm'>
                        Music
                      </span>
                    </div>
                  </Button>
                </motion.div>
                <motion.div variants={menuAnimations.item}>
                  <div className=' flex items-center gap-2 px-2 group-hover:opacity-80 transition-opacity'>
                    <div className='w-8 h-8 md:w-9 md:h-9 rounded-lg overflow-hidden'>
                      <img
                        src='/profile.jpeg'
                        alt='Profile'
                        className='w-full h-full object-cover grayscale'
                        draggable={false}
                      />
                    </div>
                    <span className='sr-only'>
                      Profile
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div className='flex items-center space-x-12'>
                <Button
                  onClick={() => setIsOpen(false)}
                  ariaLabel='Close music player'
                >
                  <ArrowLeft className='h-6 w-6 md:h-7 md:w-7 group-hover:opacity-80 transition-opacity' />
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
  );
};

export default function MenuComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <MotionConfig transition={menuTransition}>
      <MenuContainer>
        <div ref={menuRef}>
          <MenuContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </MenuContainer>
    </MotionConfig>
  );
}


