import React from 'react';
import {
  Title,
  Date,
  Category,
  CategoryItem,
  Summary,
  PostItemContent,
  PostItemWrapper,
  ThumbnailImage,
} from '@components/Main/PostItem/styles';

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: string;
  link: string;
}

const PostItem = ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}: PostItemProps) => {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage src={thumbnail} alt="Post Item Image" />

      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
