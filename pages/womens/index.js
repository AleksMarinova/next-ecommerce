import Link from 'next/link'
import Image from 'next/image'

const Womens=({data})=> {
  return (
    <div>
      {data && data.map((item, index) => (
        <div key={index}>
          <p>{item.id}</p>
          <Link href={`/womens/${item.id}`} >
          <a>{item.title}</a>
          </Link>
          <Image src={item.image} alt={item.title} width={300} height={300} />
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
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