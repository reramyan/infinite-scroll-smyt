export interface MockData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface MockDataState {
  mockData: MockData[];
  currentData: MockData | null;
  page: number;
  loading: boolean;
}

export interface MockDataActions {
  setMockData: (mockData: MockData[]) => void;
  setCurrentData: (currentData: MockData | null) => void;
  setPage: () => void;
  setLoading: (loading: boolean) => void;
  resetStore: () => void;
}

export type MockDataStore = MockDataState & MockDataActions;
