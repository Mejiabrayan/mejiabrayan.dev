import { cn } from '@/lib/utils';
import { Briefcase, HomeIcon, PenIcon } from 'lucide-react';

interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

declare global {
  interface Window {
    location: Location;
  }
}

export const FloatingNav = ({ className }: { className?: string }) => {
  const navItems: NavItem[] = [
    { name: 'Home', link: '/', icon: <HomeIcon /> },
    { name: 'Work', link: '/projects', icon: <Briefcase /> },
    { name: 'Blogs', link: '/blogs', icon: <PenIcon /> },
    // Add more navigation items here
  ];

  const getCurrentPath = () => {
    const currentPath = window.location.pathname;
    return currentPath === '/home' ? '/' : currentPath.split('/')[1];
  };

  return (
    <div
      className={cn(
        'flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-10 px-10 py-3 items-center justify-center gap-5',
        className
      )}
    >
      {navItems.map((navItem: NavItem, idx: number) => {
        const isActive = getCurrentPath() === navItem.link.split('/')[1];
        return (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative flex items-center space-x-1 text-base',
              isActive &&
                'text-white hover:text-neutral-300 border-r border-white/10 md:border-white/10 px-3 py-2 rounded-full'
            )}
          >
            {isActive && (
              <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary-accent to-transparent h-px' />
            )}
            <span
              className={cn(
                ' sm:hidden text-white flex items-center justify-center w-4 h-5 rounded-full',
                isActive && ''
              )}
            >
              {navItem.icon}
            </span>
            <span className='hidden sm:block font-pixelify text-white'>
              {navItem.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};
