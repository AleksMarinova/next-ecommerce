import Link from 'next/link'
import Image from 'next/image'

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
        <div key={index}>
        <p>{item.id}</p>
         <Link href={`/jewellery/${item.id}`} >
            <a>{item.title}</a>
         </Link> 
          <Image src={item.image} alt={item.title} width={200} height={200} />
          <p>{item.description}</p>
          <p>${item.price}</p>
         </div> 
     ))}
    </div>
  )
}




export default Jewellery;