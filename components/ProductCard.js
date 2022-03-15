import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import styles from "../styles/ProductListCard.module.css"

const ProductCard = ({ item }) => {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <h5 className={styles.heading}  >{item.title}</h5>
      <Link href={`${router.pathname}/${item.id}`}>
        <a>
          {" "}
          <Image src={item.image} alt={item.title} width={200} height={200} />
        </a>
      </Link>
      <p>${item.price}</p>
    </div>
  );
};

export default ProductCard;
