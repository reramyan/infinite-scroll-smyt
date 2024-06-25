import { createBrowserRouter } from "react-router-dom";

import { NotFoundPage } from "../src/ui/static-blocks";

import MockData from "./pages/MockData/MockData";
import MockDataDetails from "./pages/MockDataDetails/MockDataDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: null,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <MockData />,
      },
      {
        path: "/:id",
        element: <MockDataDetails />,
      },
    ],
  },
]);

export default router;
