import useGetMockData from '../hooks/useGetMockData';

import { useMockData } from '../store';

import { ErrorPage } from '../ui/static-blocks';
import FullScreenLoader from '../ui/FullScreenLoader';

const MockDataProvider = ({ children }: any) => {
  const { isLoading, isError } = useGetMockData();
  const mockdData = useMockData();

  if (isLoading && !mockdData.length) return <FullScreenLoader />;
  if (isError) return <ErrorPage />;

  return children;
};

export default MockDataProvider;
