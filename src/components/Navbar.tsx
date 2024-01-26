import { FloatingNav } from './floating-navbar';
import {
  IconArticle,
  IconHeart,
  IconHome,
  IconMessage,
  IconUser,
} from '@tabler/icons-react';
export function Navbar() {
  const navItems = [
    {
      name: 'Work',
      link: '/#work',
      icon: (
        <IconHeart className='h-4 w-4 text-neutral-500 dark:text-accents-8' />
      ),
    },
    {
      name: 'Blogs',
      link: '/blogs',
      icon: (
        <IconArticle className='h-4 w-4 text-neutral-500 dark:text-accents-8' />
      ),
    },
    {
      name: 'Lab',
      link: '/lab',
      icon: (
        <IconMessage className='h-4 w-4 text-neutral-500 dark:text-accents-8' />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems}  />
    </>
  );
}
