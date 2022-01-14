import React from 'react';
import ProfileImage from '@components/Main/ProfileImage';
import {
  Background,
  SubTitle,
  Wrapper,
  Title,
} from '@components/Main/Introudction/styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface IntroductionProps {
  profileImage: IGatsbyImageData;
}

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Yang, Seungchan </SubTitle>
          <Title>The Ju-Junior FrontEnd Devloper</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
