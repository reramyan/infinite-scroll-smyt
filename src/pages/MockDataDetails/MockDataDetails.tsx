import { useEffect } from 'react';
import { useParams } from 'react-router';

import useGetCurrentData from '../../hooks/useGetCurrentData';

import { useMockDataStore } from '../../store';
import { ErrorPage } from '../../ui/static-blocks';
import { useCurrentData } from '../../store/mockData';
import { FullScreenLoader } from '../../ui';
import { Image } from '../../components';

import * as S from '../MockData/styles';

const MockDataDetails = () => {
  const params = useParams();
  const { isLoading, isError } = useGetCurrentData(params?.id ?? '');
  const currentData = useCurrentData();
  const { setCurrentData } = useMockDataStore();

  useEffect(() => () => setCurrentData(null), []);

  if (isLoading) return <FullScreenLoader />;
  if (isError || !currentData) return <ErrorPage />;

  return (
    <S.Container>
      <Image imageSource={currentData.thumbnailUrl} alt={currentData.title} />
      <S.StyledTitle>{currentData.title}</S.StyledTitle>
    </S.Container>
  );
};
export default MockDataDetails;
