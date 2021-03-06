import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(40deg, #29323c 40%, #485563 60%);
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const GithubLink = styled(Link)`
  display: flex;
  place-items: center;
  width: 30px;
  margin-top: 20px;
  & svg {
    width: 100%;
  }
`;
