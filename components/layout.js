import Navbar from '../components/Navbar';
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container} >
      <Navbar />
      <main>{children}</main>
    </div>
  );
}