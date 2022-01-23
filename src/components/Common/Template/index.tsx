import React, { ReactNode } from 'react';
import GlobalStyle from '@components/Common/GlobalStyle';
import Footer from '@components/Common/Footer';
import { Container } from '@components/Common/Template/styles';

interface TemplateProps {
  children: ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;