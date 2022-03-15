import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
  cartItems: [],
  addToCart: (item) => set(state => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (item) => set(state => ({ cartItems: state.cartItems.filter(i => i.id !== item.id) })),
  clearCart: () => set(() => ({ cartItems: [] })),
})

const useStore = create(devtools(persist(store), {name: 'cart'}));

export default useStore;