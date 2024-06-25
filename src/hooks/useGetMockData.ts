import { useQuery } from 'react-query';

import { useMockDataStore } from '../store';
import { mockDataAPI } from '../api/api';

const useGetMockData = (enabled = true) => {
  const { setMockData, page, setLoading } = useMockDataStore();

  return useQuery(
    ['mockData', page],
    async () => {
      const mockData = await mockDataAPI.getMockData(page);
      setMockData(mockData.data);
      setLoading(false);

      return mockData;
    },
    { enabled }
  );
};

export default useGetMockData;
