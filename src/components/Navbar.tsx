import { FloatingNav } from './floating-navbar';
import { IconHeart, IconHome, IconMessage, IconUser } from '@tabler/icons-react';
export function Navbar() {
  const navItems = [
    {
      name: 'Work',
      link: '/',
      icon: <IconHeart className='h-4 w-4 text-neutral-500 dark:text-accents-8' />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className='h-4 w-4 text-neutral-500 dark:text-accents-8' />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: (
        <IconMessage className='h-4 w-4 text-neutral-500 dark:text-accents-8' />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
}
