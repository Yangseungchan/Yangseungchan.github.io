import React from 'react';
import ProfileImage from '@components/Main/ProfileImage';
import {
  Background,
  SubTitle,
  Wrapper,
  Title,
} from '@components/Main/Introudction/styles';

const Introduction = () => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>Nice to Meet You, </SubTitle>
          <Title>I'm Junior Frontend Developer Yang.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
