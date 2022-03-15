import Navbar from '../components/Navbar';
import styles from '../styles/layout.module.css'
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <motion.div className={styles.container} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 1.5 }}
    >
      <Navbar />
      <main>{children}</main>
    </motion.div>
  );
}