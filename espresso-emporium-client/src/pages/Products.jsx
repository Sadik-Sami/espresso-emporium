import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const getCoffees = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/coffee');
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoffees();
  }, [products.length]);

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center font-serif'>Our Products</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {products.map((coffee) => (
          <ProductCard key={coffee.id} coffee={coffee} />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
