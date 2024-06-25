import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router";

import MockDataProvider from "./HOC/MockDataProvider";

import router from "./router";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <MockDataProvider>
          <RouterProvider router={router} />
        </MockDataProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
