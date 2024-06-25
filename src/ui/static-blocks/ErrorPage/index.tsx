import { lazyLoad } from "../../../utils/loadable";

export const ErrorPage = lazyLoad(
  () => import("./ErrorPage"),
  (module) => module.ErrorPage
);
