import React from 'react';
import {
  FooterWrapper,
  PoweredStack,
  PowerStackTitle,
  StackIconContainer,
  AlignedLink
} from '@components/Common/Footer/styles';
import GatsbyIcon from '../../../../static/gatsbyicon.svg';
import ReactIcon from '../../../../static/reacticon.svg';
import TypescriptIcon from '../../../../static/typescripticon.svg';
import GraphqlIcon from '../../../../static/graphqlicon.svg';
// import { Link } from 'gatsby';

const Footer = () => {
  return (
    <FooterWrapper>
      © 2022 Yang, Seungchan
      <PoweredStack>
        <PowerStackTitle>Powered By</PowerStackTitle>
        <StackIconContainer>
          <AlignedLink to="https://www.gatsbyjs.com/">
            <GatsbyIcon />
          </AlignedLink>
          <AlignedLink to="https://reactjs.org/">
            <ReactIcon />
          </AlignedLink>
          <AlignedLink to="https://www.typescriptlang.org/">
            <TypescriptIcon />
          </AlignedLink>
          <AlignedLink to="https://graphql.org/">
            <GraphqlIcon />
          </AlignedLink>
        </StackIconContainer>
      </PoweredStack>
    </FooterWrapper>
  );
};

export default Footer;
