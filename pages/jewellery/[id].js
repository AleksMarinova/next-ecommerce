import { useRouter } from "next/router";
import Image from "next/image";
import useStore from "../../zustand/store";
import styles from "../../styles/ProductPage.module.css";
import { motion } from "framer-motion";

const Item = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <motion.div layoutId={data.id}>
          <Image src={data.image} alt={data.title} width={300} height={300} />
        </motion.div>
        <div className={styles.info}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(data);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`https://fakestoreapi.com/products/${ctx.query.id}`);
  const data = await res.json();
  return {
    props: {
      data,
      notFound: !data,
    },
  };
};

export default Item;
