import styles from '../styles/Navbar.module.css';
import Link  from 'next/link';
import { useState } from 'react'
import { FaOpencart } from 'react-icons/fa';
import useStore from '../zustand/store';

export default function Navbar() {
  const itemsInCart = useStore(state => state.cartItems.length);

  return (
    <div className={styles.navbar}>
      <Link href="/"><a>
          <p>Needful</p>
          <h5>Things</h5>
        </a></Link>
      <Link href='/jewellery' ><a>jewellery</a></Link>
      <Link href='/womens' ><a>women`s clothing</a></Link>
      <Link href='/cart' ><a>
       <div className={styles.cart_container} >
       <div className={styles.counter}>{itemsInCart}</div>
          <FaOpencart/>
       </div>
        </a></Link> 
    </div>
  )
}