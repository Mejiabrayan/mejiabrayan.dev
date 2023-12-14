import type { BlogCardsProps } from 'types/contentful';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export const BlogCard: React.FC<BlogCardsProps> = ({ posts }) => {
  return (
    <div className='flex flex-col gap-4'>
      {posts.map((post, index) => (
        <Card
          key={index}
          className={`rounded-lg h-full w-full backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-700 shadow-sm`}
        >
          <CardHeader className='p-4'>
            <CardTitle className='text-lg text-white font-semibold mb-2'>
              {post.title}
            </CardTitle>
            <CardDescription className='text-white text-sm'>
              {post.description}
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
      ))}
    </div>
  );
};
