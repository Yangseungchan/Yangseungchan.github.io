import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GatsbyImgProps } from '@components/Post/PostHead/index';

export const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`;
