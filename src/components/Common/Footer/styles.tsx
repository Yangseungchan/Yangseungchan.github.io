import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const PoweredStack = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 200px;
  box-sizing: border-box;
`;

export const PowerStackTitle = styled.div`
  display: inline-block;
  white-space: nowrap;
`;

export const StackIconContainer = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
  margin-left: 10px;
`;

export const AlignedLink = styled(Link)`
  display: flex;
  place-items: center;
`;
