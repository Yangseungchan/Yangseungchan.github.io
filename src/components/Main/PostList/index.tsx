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
  // console.log('selected : ', selectedCategory);

  // const postListData = useMemo(
  //   () =>
  //     posts.filter(
  //       ({
  //         node: {
  //           frontmatter: { categories },
  //         },
  //       }) =>
  //         selectedCategory === 'All'
  //           ? true
  //           : categories.includes(selectedCategory),
  //     ),
  //   [posts, selectedCategory],
  // );
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);
  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} key={id} link="https://www.google.co.kr" />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
