import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '../../components/ProductCard'

export const getServerSideProps = async (ctx) => {
  const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
  const data = await res.json();
  return {
    props: { 
      data,
      notFound: !data,
    },
  };
}

const Jewellery=({data}) => {
  return (
    <div>
     {data && data.map((item, index) => (
        <ProductCard key={item.id} item={item} />
     ))}
    </div>
  )
}




export default Jewellery;