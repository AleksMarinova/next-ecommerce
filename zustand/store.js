import create from 'zustand';

const useStore = create(set => ({
  count: 5,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

export default useStore;