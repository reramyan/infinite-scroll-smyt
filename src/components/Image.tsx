import styled from 'styled-components';

const StyledImage = styled.img`
  border-radius: 200px;
  transition: 0.3s;
  width: 100px;
  height: 100px;

  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

interface IImage {
  imageSource: string;
  alt?: string;
}

const Image = ({ imageSource, alt = 'photo' }: IImage) => {
  return <StyledImage alt={alt} src={imageSource} />;
};

export default Image;
