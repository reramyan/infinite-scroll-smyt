import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { Spinner } from '../../ui';

import { useMockDataStore } from '../../store';

import { Image, Search, Button } from '../../components';

import * as S from './styles';

const MockData = () => {
  const navigate = useNavigate();
  const { setLoading, setPage, loading, mockData, resetStore } = useMockDataStore();
  const [filterValue, setFilterValue] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  const foundData = mockData.filter(data => data.title.includes(filterValue));

  const handleFilterChange = (value: string) => setFilterValue(value.toLowerCase());

  const getMoreData = () => {
    setPage();
    setLoading(!loading);
  };

  const lastItemRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          getMoreData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <S.ContentContainer id='content-container'>
      <S.SearchContainer>
        <Search debounceTime={400} onChange={handleFilterChange} />
        <Button onClick={() => resetStore()} disabled={mockData.length === 50 || !!filterValue}>
          reset
        </Button>
      </S.SearchContainer>
      {foundData.length ? (
        <S.ImgWrapper>
          {foundData.map((data, idx) => (
            <S.Container
              key={data.id}
              ref={foundData.length === idx + 1 ? lastItemRef : null}
              onClick={() => navigate(`/${data.id}`)}
            >
              <Image imageSource={data.thumbnailUrl} alt={data.title} />
              <S.StyledTitle>{data.title}</S.StyledTitle>
            </S.Container>
          ))}
        </S.ImgWrapper>
      ) : (
        <S.StyledTitle>No results found</S.StyledTitle>
      )}
      {loading && (
        <S.LoaderContainer>
          <Spinner width={60} height={60} />
        </S.LoaderContainer>
      )}
    </S.ContentContainer>
  );
};
export default MockData;
