import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const navLinks = [
  { label: 'Home', href: '/', id: 1 },
  { label: 'Projects', href: '#projects', id: 2 },
  { label: 'Blog', href: '/blogs', id: 3 },
  { label: 'Contact', href: '#contact', id: 4 },
];

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: { opacity: 0 },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1280px)');
  console.log(matches);

  return (
    <nav
      className='sticky top-0 z-10 mb-16 mt-2 mx-auto xl:mx-16 w-full flex items-center justify-center lg:justify-between
      pt-4 pb-6 backdrop-filter backdrop-blur-lg bg-opacity-20'
    >
      <div className='hidden md:hidden  lg:hidden xl:flex items-center space-x-8 xl:gap-2 '>
        <h1 className='text-sm xl:text-base font-semibold text-white'>
          Brayan M. Cuenca
        </h1>
        <span className='text-sm xl:text-base text-gray-400'>
          Software Engineer
        </span>
      </div>

      <div className='space-x-8 hidden md:hidden lg:flex items-center'>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className='text-base font-geist-regular hover:underline text-gray-400'
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* {!matches && (
        <Sheet>
          <SheetTrigger className='text-w'>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-2">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </SheetContent>
        </Sheet>
      )} */}
    </nav>
  );
}
