import React from 'react';
import { PostListWrapper } from '@components/Main/PostList/styles';
import PostItem from '@components/Main/PostItem';
import { PostListItemType } from '@typings/PostItem.types';

interface PostListProps {
  posts: PostListItemType[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <PostListWrapper>
      {posts?.map(({ node: { id, frontmatter } }) => {
        return (
          <PostItem {...frontmatter} key={id} link="https://www.google.co.kr" />
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
