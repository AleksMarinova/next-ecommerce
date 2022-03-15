import useStore from "../zustand/store";

const Cart = () => {
  const { cartItems } = useStore(state => state);
  const removeFromCart = useStore(state => state.removeFromCart);
  const clearCart = useStore(state => state.clearCart);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - {item.price}
            <button onClick={(e)=> {
              e.stopPropagation();
              e.preventDefault();
              removeFromCart(item);
            }} >Remove</button>
          </li>
        ))}
      </ul>
      <button>Checkout</button>
      <button onClick={(e)=>{
        e.stopPropagation();
        e.preventDefault();
        clearCart();
      }}>Clear cart</button>
    </div>
  )
}

export default Cart;