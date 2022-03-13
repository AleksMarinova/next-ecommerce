import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
    <Hero />
    </div>
  )
}
