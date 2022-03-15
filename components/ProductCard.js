import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import styles from "../styles/ProductListCard.module.css"
import { motion } from "framer-motion";

const ProductCard = ({ item }) => {
  const router = useRouter();
  
  return (
    <motion.div 
    className={styles.container}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    >
      <h5 className={styles.heading}  >{item.title}</h5>
      <Link href={`${router.pathname}/${item.id}`}>
        <a>
        <motion.a
        layoutId={item.id}
        >
          {" "}
          <Image src={item.image} alt={item.title} width={200} height={200} />
        </motion.a>
        </a>
        
      </Link>
      <p>${item.price}</p>
    </motion.div>
  );
};

export default ProductCard;
