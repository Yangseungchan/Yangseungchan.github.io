import React from 'react';
import { PostListWrapper } from '@components/Main/PostList/styles';
import PostItem from '@components/Main/PostItem';
import { PostListItemType } from '@typings/PostItem.types';

interface PostListProps {
  selectedCategory: string;
  posts: PostListItemType[];
}

const PostList = ({ selectedCategory, posts }: PostListProps) => {
  return (
    <PostListWrapper>
      {posts
        ?.filter(
          ({
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType) => categories.includes(selectedCategory),
        )
        .map(({ node: { id, frontmatter } }) => {
          return (
            <PostItem
              {...frontmatter}
              key={id}
              link="https://www.google.co.kr"
            />
          );
        })}
      {/*<PostItem {...POST_ITEM_DATA} />*/}
      {/*<PostItem {...POST_ITEM_DATA} />*/}
      {/*<PostItem {...POST_ITEM_DATA} />*/}
      {/*<PostItem {...POST_ITEM_DATA} />*/}
    </PostListWrapper>
  );
};

export default PostList;
