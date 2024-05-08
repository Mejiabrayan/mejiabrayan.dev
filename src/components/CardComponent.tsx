import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { BlogCardsProps } from 'types/contentful';

export const BlogCard: React.FC<BlogCardsProps> = ({ posts }) => {
  const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.04 * index,
      },
    }),
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
      {posts.map((post, index) => (
        <motion.div
          variants={fadeAnimationVariants}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
          key={index}
        >
          <CardComponent key={index} post={post} />
        </motion.div>
      ))}
    </div>
  );
};

const CardComponent: React.FC<{ post: any }> = ({ post }) => {
  const slicedDescription = post.description.slice(0, 100);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className='group relative max-w-2xl lg:max-w-[350px] w-full rounded-xl bg-neutral-950 flex flex-col'
      style={{ height: '450px' }}
    >
      <div className='absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent' />
      <motion.div
        className='pointer-events-none bottom-0 absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)`,
        }}
      />
      <div className='relative flex flex-col justify-between gap-3 rounded-xl border border-white/10 px-4 py-5 flex-grow'>
        <div className='space-y-2'>
          <img
            src={'/bluetwo.jpeg'}
            className='rounded-xl h-32 w-full object-cover opacity-75'
            draggable={false}
          />
          <div className='flex flex-row items-center justify-center pt-2'>
            <h3 className='text-base text-balance font-semibold text-neutral-200'>
              {post.title}
            </h3>
            <p className='text-[12px] text-neutral-300 select-none'>
              {post.date}
            </p>
          </div>
          <p className='text-sm leading-tight text-neutral-400 pb-3'>
            {slicedDescription}
          </p>
        </div>
        <a
          href={`blogs/${post.slug}`}
          className='inline-flex items-center justify-center text-sm py-2 px-4 font-medium bg-accents-7 text-black rounded duration-300 hover:bg-white/70 w-full'
        >
          Read More
        </a>
      </div>
    </div>
  );
};
