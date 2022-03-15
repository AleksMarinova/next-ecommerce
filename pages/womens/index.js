import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '../../components/ProductCard'
const Womens=({data})=> {
  return (
    <div>
      {data && data.map((item, index) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch('https://fakestoreapi.com/products/category/women\'s clothing');
  const data = await res.json();
  return {
    props: { 
      data,
      notFound: !data,
    },
  };
}

export default Womens;