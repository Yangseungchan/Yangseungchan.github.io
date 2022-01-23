import React from 'react';
import { MarkdownRenderer } from '@components/Post/PostContent/styles';

interface PostContentProps {
  html: string;
}

const PostContent = ({ html }: PostContentProps) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
