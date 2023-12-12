import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  description,
  slug,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
};


