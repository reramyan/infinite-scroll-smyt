import { useQuery } from 'react-query';

import { useMockDataStore } from '../store';
import { mockDataAPI } from '../api/api';

const useGetCurrentData = (id: string) => {
  const { setCurrentData } = useMockDataStore();

  return useQuery(['currentData', id], async () => {
    const currentData = await mockDataAPI.getCurrentData(id);
    setCurrentData(currentData.data);

    return currentData;
  });
};

export default useGetCurrentData;
