import styled from 'styled-components';

export const StyledTitle = styled.div`
  color: gray;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`;

export const ImgWrapper = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  justify-content: center;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 641px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const Container = styled.div`
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
