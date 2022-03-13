import styles from '../styles/Navbar.module.css';
import Link  from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/"><a>SHOP</a></Link>
      <Link href='/jewellery' ><a>jewellery</a></Link>
      <Link href='/womens' ><a>women`s clothing</a></Link>
      {/* <Link href='/mens' ><a>men`s clothing</a></Link> */}
    </div>
  )
}