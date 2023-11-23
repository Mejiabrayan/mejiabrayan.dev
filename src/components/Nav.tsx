import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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

const navLinks = [
  { name: 'Home', href: '/', id: 1 },
  { name: 'Projects', href: '#projects', id: 2 },
  { name: 'Blog', href: '#blogs', id: 3 },
  { name: 'Contact', href: '#contact', id: 4 },
];

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1280px)');
  console.log(matches);

  return (
    <nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-geist-medium md:mx-16 lg:mx-32 border-b border-gray-800'>
      <div className='flex items-center space-x-4 xl:space-x-8'>
        <h1 className='text-sm xl:text-base font-semibold text-white'>
          Brayan M. Cuenca
        </h1>
        <span className='text-sm xl:text-base text-gray-400'>Software Engineer</span>
      </div>

      <div className='hidden xl:flex space-x-8'>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className='text-base font-geist-regular hover:underline text-gray-400'
          >
            {link.name}
          </a>
        ))}
      </div>

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className='space-y-1.5 cursor-pointer xl:hidden z-50 ml-auto' // Move to the far right with ml-auto
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className='block h-0.5 w-8 bg-gray-700'
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className='block h-0.5 w-6 bg-gray-700'
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className='block h-0.5 w-4 bg-gray-700'
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.div
          variants={navMotion}
          animate='visible'
          initial='hidden'
          className='fixed flex bg-[#0c0c10] bottom-0 right-0 w-full h-screen items-center justify-center text-white' // Move to the far right with right-0
        >
          <div className='flex flex-col gap-24 text-xl'>
            {navLinks.map((link) => (
              <motion.a key={link.id} variants={itemMotion} href={link.href}>
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
