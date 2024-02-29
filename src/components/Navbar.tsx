import { FlaskConical } from 'lucide-react';
import { FloatingNav } from './floating-navbar';
import { IconArticle, IconHeart } from '@tabler/icons-react';

enum NavItemName {
  Work = 'Work',
  Blogs = 'Blogs',
  Lab = 'Lab',
}

type NavItem = {
  name: NavItemName;
  link: string;
  icon: JSX.Element;
};

export function Navbar() {
  const navItems: NavItem[] = [
    {
      name: NavItemName.Work,
      link: '/#work',
      icon: (
        <IconHeart className='h-4 w-4 text-neutral-500 dark:text-accents-8' />
      ),
    },
    {
      name: NavItemName.Blogs,
      link: '/blogs',
      icon: (
        <IconArticle className='h-4 w-4 text-neutral-500 dark:text-accents-8' />
      ),
    },
    {
      name: NavItemName.Lab,
      link: '/lab',
      icon: (
        <FlaskConical className='h-4 w-4 text-neutral-500 dark:text-accents-8' />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
}
