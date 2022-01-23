import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
  BackgroundImage,
  PostHeadWrapper,
} from '@components/Post/PostHead/styles';
import PostHeadInfo, { PostHeadInfoProps } from '@components/Post/PostHeadInfo';

export interface GatsbyImgProps {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
}

interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: IGatsbyImageData;
}

const PostHead = ({ title, date, categories, thumbnail }: PostHeadProps) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
};

export default PostHead;
