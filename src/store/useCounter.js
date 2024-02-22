import { create } from 'zustand';

const useCountStore = create((set) => ({
  count: 0,
  increment: () =>
    set((store) => ({
      count: store.count + 1,
    })),
  reset: () =>
    set(() => ({
      count: 0,
    })),
}));

export default useCountStore;
