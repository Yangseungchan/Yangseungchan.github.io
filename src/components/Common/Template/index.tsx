import React, { ReactNode } from 'react';
import GlobalStyle from '@components/Common/GlobalStyle';
import Footer from '@components/Common/Footer';
import { Container } from '@components/Common/Template/styles';
import { Helmet } from 'react-helmet';

interface TemplateProps {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
}

const Template = ({
  title,
  description,
  url,
  image,
  children,
}: TemplateProps) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="꾸준히 성장하고픈 학생 개발자입니다."
        />
        <meta httpEquiv="Content-Type" content="text/html;charset-UTF-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta
          name="google-site-verification"
          content="U7mYWw_vHYaETxzhv0sF3guWdjY6eWlRYQoOrdOMdkg"
        />
        <meta
          name="naver-site-verification"
          content="98b230f2f18f79e76e7a6df263460ac5ce6d22f8"
        />
        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
