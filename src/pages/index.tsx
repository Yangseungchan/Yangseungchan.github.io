import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import Footer from '@components/Common/Footer';
import GlobalStyle from '@components/Common/GlobalStyle';
import Introudction from '@components/Main/Introudction';
import CategoryList, { CategoryListProps } from '@components/Main/CategoryList';
import { PostListItemType } from '@typings/PostItem.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import PostList from '@components/Main/PostList';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const IndexPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}: IndexPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });
          list['All']++;
          return list;
        },
        { All: 0 },
      ),
    [],
  );
  return (
    <Container>
      <GlobalStyle />
      <Introudction profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList posts={edges} selectedCategory={selectedCategory} />
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
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;
