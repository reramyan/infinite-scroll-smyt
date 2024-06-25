import { type Draft } from 'immer';
import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type Middleware = [['zustand/immer', never], ['zustand/devtools', never]];

const createZustandStore = <TState>(createState: StateCreator<TState, Middleware>, name?: string) =>
  create<TState, Middleware>(immer(devtools(createState, { name })));

export default createZustandStore;
