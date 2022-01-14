import React from 'react';
import styled from '@emotion/styled';
import Footer from '@components/Common/Footer';
import GlobalStyle from '@components/Common/GlobalStyle';
import Introudction from '@components/Main/Introudction';
import CategoryList from '@components/Main/CategoryList';
import { PostListItemType } from '@typings/PostItem.types';
import PostList from '@components/Main/PostList';
import { graphql } from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
  // Python: 4,
  // Django: 6,
  // Celery: 2,
  // Docker: 8,
  // NextJS: 9,
  // Typescript: 10,
  // Javascript: 2,
  // Java: 5,
  // Kotlin: 2,
  // Golang: 1,
};

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
  };
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  return (
    <Container>
      <GlobalStyle />
      <Introudction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
