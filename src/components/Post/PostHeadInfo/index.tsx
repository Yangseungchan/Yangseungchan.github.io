import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  PostHeadInfoWrapper,
  PrevPageIcon,
  Title,
  PostData,
} from '@components/Post/PostHeadInfo/styles';

export interface PostHeadInfoProps {
  title: string;
  date: string;
  categories: string[];
}

const PostHeadInfo = ({ title, date, categories }: PostHeadInfoProps) => {
  const goBackPage = () => window.history.back();

  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>{title}</Title>
      <PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
