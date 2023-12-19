import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';
import { navLinks } from 'config/site';

export default function Nav() {
  const matches = useMediaQuery('(min-width: 1280px)');

  return (
    <nav className='sticky top-0 z-50 w-full backdrop-filter backdrop-blur-md bg-opacity-20'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <div className='lg:flex items-center space-x-4 hidden md:hidden'>
          <h1 className='text-lg font-semibold text-white'>Brayan M. Cuenca</h1>
        </div>

        <div className='hidden md:flex lg:flex items-center space-x-4'>
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
