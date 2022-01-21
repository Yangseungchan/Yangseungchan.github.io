import React from 'react';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { PostListWrapper } from '@components/Main/PostList/styles';
import PostItem from '@components/Main/PostItem';
import { PostListItemType } from '@typings/PostItem.types';

interface PostListProps {
  selectedCategory: string;
  posts: PostListItemType[];
}

const PostList = ({ selectedCategory, posts }: PostListProps) => {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} key={id} link={slug} />
        ),
      )}
    </PostListWrapper>
  );
};

export default PostList;
