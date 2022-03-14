import create from 'zustand';

const useStore = create(set => ({
  cartItems: [],
  addToCart: (item) => set(state => ({ cartItems: [...state.cartItems, item] })),
}));

export default useStore;