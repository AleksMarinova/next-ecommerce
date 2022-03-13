const Mens=({data})=> {
  return (
    <div>
      {data && data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch('https://fakestoreapi.com/products/category/men\'s clothing');
  const data = await res.json();
  return {
    props: { 
      data,
      notFound: !data,
    },
  };
}

export default Mens;