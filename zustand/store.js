import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set) => ({
  cartItems: [],
  addToCart: (item) => set(state => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (item) => set(state => ({ cartItems: state.cartItems.filter(i => i.id !== item.id) })),
  clearCart: () => set(() => ({ cartItems: [] })),
})
store = devtools(store);
store= persist(store), {name: 'cart'};

const useStore = create(store);

export default useStore;