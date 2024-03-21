import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex max-w-fit sticky top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pl-2 pr-8 py-2 items-center justify-center space-x-4',
        className
      )}
    >
      <button className='border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full'>
        <a href='/'>Home</a>
        <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px' />
      </button>
      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            'relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 '
          )}
        >
          <span className='block sm:hidden'>{navItem.icon}</span>
          <span className='hidden sm:block text-sm'>{navItem.name}</span>
        </a>
      ))}
    </div>
  );
};
