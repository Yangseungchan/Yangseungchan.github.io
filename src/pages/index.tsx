import React from 'react';
import styled from '@emotion/styled';
import Footer from '@components/Common/Footer';
import GlobalStyle from '@components/Common/GlobalStyle';
import Introudction from '@components/Main/Introudction';
import CategoryList from '@components/Main/CategoryList';
import PostList from '@components/Main/PostList';

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

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introudction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  );
};

export default IndexPage;
