import { useRouter } from "next/router";
import Image from "next/image";

const Item = ({data}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{id}</h1>
      <p>{data.title}</p>
      <Image src={data.image} alt={data.title} width={300} height={300} />
      <p>{data.description}</p>
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