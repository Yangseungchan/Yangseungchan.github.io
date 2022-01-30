import React from 'react';
import ProfileImage from '@components/Main/ProfileImage';
import {
  Background,
  SubTitle,
  Wrapper,
  Title,
  GithubLink,
} from '@components/Main/Introduction/styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import GithubIcon from '../../../../static/githubicon.svg';

interface IntroductionProps {
  profileImage: IGatsbyImageData;
}

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Yang, Seungchan</SubTitle>
          <Title>꾸준히 성장하고자 노력하는 학생 개발자 입니다.</Title>
        </div>
        <GithubLink to="https://github.com/Yangseungchan">
          <GithubIcon />
        </GithubLink>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
