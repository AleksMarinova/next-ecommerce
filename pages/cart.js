import useStore from "../zustand/store";
import styles from "../styles/ShoppingCart.module.css"
import Image from "next/image";
import { motion } from 'framer-motion'

const Cart = () => {
  const { cartItems } = useStore(state => state);
  const removeFromCart = useStore(state => state.removeFromCart);
  const clearCart = useStore(state => state.clearCart);

  return (
    <motion.div className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <Image src={item.image} alt={item.name} width={100} height={100} />
            {item.title} - ${item.price}
            <button onClick={(e)=> {
              e.stopPropagation();
              e.preventDefault();
              removeFromCart(item);
            }} >Remove</button>
          </li>
        ))}
      </ul>
      <button >Checkout</button>
      <button className={styles.clear}  onClick={(e)=>{
        e.stopPropagation();
        e.preventDefault();
        clearCart();
      }}>Clear cart</button>
    </motion.div>
  )
}

export default Cart;