import { Helmet } from 'react-helmet-async';

import * as S from './styles';
import useGetMockData from '../../../hooks/useGetMockData';
import { Button } from '../../../components';

export function ErrorPage() {
  const { refetch } = useGetMockData(false);

  return (
    <>
      <Helmet>
        <title>Error Page</title>
        <meta name='description' content='Error Page' />
      </Helmet>
      <S.Wrapper>
        <S.Title>
          <span role='img' aria-label='Crying Face'>
            😢
          </span>
        </S.Title>
        <S.P>Something went wrong :(</S.P>
        <Button onClick={() => refetch()}>Refetch data</Button>
      </S.Wrapper>
    </>
  );
}
