import create from 'zustand';

const useStore = create(set => ({
  cartItems: [],
  addToCart: (item) => set(state => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (item) => set(state => ({ cartItems: state.cartItems.filter(i => i.id !== item.id) })),
  clearCart: (item) => set(state => ({ cartItems: [] })),
}));

export default useStore;