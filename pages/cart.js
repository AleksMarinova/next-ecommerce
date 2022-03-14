import useStore from "../zustand/store";

const Cart = () => {
  const { cartItems } = useStore(state => state);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart;