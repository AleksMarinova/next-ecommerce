import { useRouter } from "next/router";
import Image from "next/image";
import useStore from '../../zustand/store';

const Item = ({data}) => {
  const router = useRouter();
  const { id } = router.query;
  const addToCart = useStore(state => state.increment);

  return (
    <div>
      <h1>{id}</h1>
      <p>{data.title}</p>
      <Image src={data.image} alt={data.title} width={300} height={300} />
      <p>{data.description}</p>
      <button onClick={(e)=> {
        e.preventDefault();
        e.stopPropagation();
        addToCart();
      }} >Add to cart</button>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`https://fakestoreapi.com/products/${ctx.query.id}`);
  const data = await res.json();
  return {
    props: { 
      data,
      notFound: !data,
    },
  };
}

export default Item;