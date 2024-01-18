import { BentoGrid, BentoGridItem } from '@/components/bento-grid';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

export function BentoGrids() {
  return (
    <BentoGrid className='max-w-xl mx-auto md:auto-rows-[20rem]'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);

const ImageComponent = ({ src, alt }: any) => (
  <img 
    src={src} 
    alt={alt}
    className='flex flex-1 w-full h-full min-h-[9rem] rounded dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'
  />
);
const items = [
  {
    title: 'OrangeLeaf Notes',
    description:
      'OrangeLeaf is a simple note-taking app that allows you to take notes and categorize them into different categories.',
    header: <ImageComponent src='orangeleaf.png' alt='OrangeLeaf Notes' />,
    className: 'md:col-span-2',
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'RapidDrafts',
    description:
      'RapidDrafts is your comprehensive drafting assistant, designed to streamline your content creation process with speed and precision.',
    header: <ImageComponent src='/rapiddrafts.png' alt='RapidDrafts' />,
    className: 'md:col-span-1',
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'LogoAICreator',
    description: `LogoAIcreator.com is an innovative SaaS platform utilizing AI, specifically OpenAI's DALL-E9, to craft striking logos for businesses and brands. Our tech-savvy approach, powered by Next.js and React, ensures a user-friendly experience.`,
    header: <ImageComponent src='/logoaicreator.png' alt='LogoAICreator' />,
    className: 'md:col-span-1',
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Time Tracker',
    description: `Time Tracker is a sleek Next.js 13 + Supabase application designed to streamline time tracking. With intuitive features, real-time updates, and seamless integration with Supabase, it's the perfect tool to help individuals and teams boost productivity. Say goodbye to time management hassles and hello to efficiency with Time Tracker.`,
    header: <ImageComponent src='/time-tracker.png' alt='Time Tracker' />,
    className: 'md:col-span-2',
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
  },
];
