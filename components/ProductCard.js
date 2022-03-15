import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

const ProductCard = ({ item }) => {
  const router = useRouter();
  
  return (
    <div>
      <p>{item.id}</p>
      <a>{item.title}</a>
      <Link href={`${router.pathname}/${item.id}`}>
        <a>
          {" "}
          <Image src={item.image} alt={item.title} width={200} height={200} />
        </a>
      </Link>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
};

export default ProductCard;
