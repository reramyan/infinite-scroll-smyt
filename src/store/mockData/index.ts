import createZustandStore from '../createStore';

import { MockDataState, MockDataStore } from './interfaces';

const initialState: MockDataState = {
  mockData: [],
  currentData: null,
  loading: false,
  page: 1,
};

const useMockDataStore = createZustandStore<MockDataStore>(
  set => ({
    ...initialState,
    setMockData: mockData =>
      set(
        prevState => {
          prevState.mockData = [...prevState.mockData, ...mockData];
        },
        false,
        'setMockData'
      ),
    setCurrentData: currentData => set(() => ({ currentData }), false, 'setCurrentData'),
    setPage: () =>
      set(
        prevState => {
          prevState.page = prevState.page + 1;
        },
        false,
        'setPage'
      ),
    setLoading: loading => set(() => ({ loading }), false, 'setLoading'),
    resetStore: () => set(() => initialState, false, 'resetStore'),
  }),
  'MockDataStore'
);

export default useMockDataStore;

export const useMockData = () => useMockDataStore().mockData;
export const useCurrentData = () => useMockDataStore().currentData;
