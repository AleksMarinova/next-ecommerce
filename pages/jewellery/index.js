import ProductCard from '../../components/ProductCard'
import styles from '../../styles/ProductList.module.css'

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
    <div className={styles.container}>
     {data && data.map((item, index) => (
        <ProductCard key={item.id} item={item} />
     ))}
    </div>
  )
}




export default Jewellery;