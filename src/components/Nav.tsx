import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';

const MagneticTab = ({ item }: { item: { id: number; text: string } }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [hoverPosition, setHoverPosition] = useState({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;

    setHoverPosition({ x, y, opacity: 1 });
  };

  const onMouseOut = () => {
    setHoverPosition({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <>
      <button
        ref={ref}
        className='relative h-9'
        onMouseMove={handleMouseMove}
        onMouseLeave={onMouseOut}
      >
        <span className='relative px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'>
          {item.text}
        </span>{' '}
        <div
          className='absolute bottom-0 left-0 -z-10 h-full w-full rounded-[4px] bg-zinc-200/80 transition-opacity dark:bg-zinc-800/80'
          aria-hidden='true'
          style={{
            transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)`,
            opacity: hoverPosition.opacity,
          }}
        />
      </button>
    </>
  );
};

const navLinks = [
  { label: 'Home', href: '/', id: 1 },
  { label: 'Projects', href: '#projects', id: 2 },
  { label: 'Blog', href: '/blogs', id: 3 },
  { label: 'Contact', href: '#contact', id: 4 },
];

export default function Nav() {
  const matches = useMediaQuery('(min-width: 1280px)');

  return (
    <nav className='sticky top-0 z-50 w-full backdrop-filter backdrop-blur-md bg-opacity-20'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <div className='lg:flex items-center space-x-4 hidden md:hidden'>
          <h1 className='text-lg font-semibold text-white'>Brayan M. Cuenca</h1>
          <span className='text-base text-gray-400'>Software Engineer</span>
        </div>

        <div className='hidden md:flex items-center space-x-4'>
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              whileHover={{ y: -3 }}
              className='text-base font-medium text-white'
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        {!matches && (
          <Sheet>
            <SheetTrigger className='md:hidden text-white cursor-pointer'>
              Menu
            </SheetTrigger>
            <SheetContent>
              <div className='flex flex-col space-y-4 p-6'>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    whileHover={{ scale: 1.05, translateY: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='text-lg text-gray-200 hover:text-white font-medium py-2 transition duration-150 ease-in-out'
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}
