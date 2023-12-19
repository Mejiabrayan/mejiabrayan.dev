import type { BlogCardsProps } from 'types/contentful';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useRef, useState } from 'react';

export const BlogCard: React.FC<BlogCardsProps> = ({ posts }) => {
  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post, index) => (
        <BlogCardItem key={index} post={post} />
      ))}
    </div>
  );
};

const BlogCardItem: React.FC<{ post: any }> = ({ post }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative'
    >
      <div
        className='pointer-events-none absolute -inset-0 opacity-0 transition duration-500 rounded-xl'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(201, 201, 201, 0.25), transparent 40%)`,
        }}
      />
      <Card
        className={`rounded-lg h-full w-full backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-700 shadow-sm`}
      >
        <CardHeader className='p-4'>
          <CardTitle className='text-lg text-white font-semibold mb-2'>
            {post.title}
          </CardTitle>
          <CardDescription className='text-white text-sm'>
            {post.description ?? ''}
          </CardDescription>
        </CardHeader>
        <CardContent className='p-4 mt-auto'>
          <a
            href={`blogs/${post.slug}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-sm hover:underline'
          >
            View Blog
          </a>
        </CardContent>
      </Card>
    </div>
  );
};
