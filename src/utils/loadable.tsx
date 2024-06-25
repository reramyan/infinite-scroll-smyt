import {
  type ComponentProps,
  type ComponentType,
  lazy,
  type ReactElement,
  type ReactNode,
  Suspense,
} from "react";

interface Opts {
  fallback: ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <T extends Promise<any>, U extends ComponentType<any>>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null }
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then((module) => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: ComponentProps<U>): ReactElement => (
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
