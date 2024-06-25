import { Helmet } from 'react-helmet-async';

import * as S from './styles';
import { useNavigate } from 'react-router';
import { Button } from '../../../components';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name='description' content='Page not found' />
      </Helmet>
      <S.Wrapper>
        <S.Title>
          4
          <span role='img' aria-label='Crying Face'>
            😢
          </span>
          4
        </S.Title>
        <S.P>Page not found.</S.P>
        <Button onClick={() => navigate('/')}>Home</Button>
      </S.Wrapper>
    </>
  );
}
