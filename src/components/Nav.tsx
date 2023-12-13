import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';

const navLinks = [
  { label: 'Home', href: '/', id: 1 },
  { label: 'Projects', href: '#projects', id: 2 },
  { label: 'Blog', href: '/blogs', id: 3 },
  { label: 'Contact', href: '#contact', id: 4 },
];

export default function Nav() {
  const matches = useMediaQuery('(min-width: 1280px)');

  return (
    <nav className='sticky top-0 z-50 w-full backdrop-filter backdrop-blur-lg bg-opacity-20'>
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
              className='text-base font-semibold hover:underline text-white'
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {!matches && (
          <Sheet >
            <SheetTrigger className='md:hidden text-white cursor-pointer'>
              Menu
            </SheetTrigger>
            <SheetContent>
              <div className='flex flex-col space-y-2 p-4'>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    whileTap={{ scale: 0.95 }}
                    className='text-black py-2'
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
