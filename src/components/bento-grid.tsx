import { cn } from '@/lib/utils';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  content,
  date,
  image,
  slug,
  title,
}: {
  className?: string;
  content?: any;
  date?: string;
  image?: string | React.ReactNode;
  slug?: string;
  title?: string;
}) => {
  return (
    <div
      className={cn(
        'relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-neutral-950 justify-between flex flex-col space-y-2 border border-white/10 ',
        className
      )}
    >
      {' '}
      <div className='absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent' />
      {image}
      <div className=' space-y-2 '>
        <div className='font-sans font-bold text-neutral-200 mb-2 mt-2'>
          {title}
        </div>
        <div className='font-sans font-normal text-xs text-accents-4'>
          {date}
        </div>
        <div className='font-sans font-normal  text-xs text-accents-6'>
          {documentToHtmlString(content)}
        </div>
        <a
          href={`projects/${slug}`}
          className='inline-flex items-center justify-center text-sm py-2 px-4 font-medium bg-accents-7 text-black rounded duration-300 hover:bg-white/70 w-full'
        >
          Read More
        </a>
      </div>
    </div>
  );
};
