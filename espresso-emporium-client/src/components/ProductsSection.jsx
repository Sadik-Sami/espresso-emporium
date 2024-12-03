import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

function ProductsSection() {
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
  }, []);
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='text-center mb-8'>
        <p className='text-text-secondary mb-2'>--- Sip & Savor ---</p>
        <h2 className='text-4xl font-bold text-text mb-6'>Our Popular Products</h2>
        <Link
          to='/add-coffee'
          className='inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-secondary-hover transition-colors'>
          <Plus size={20} />
          Add Coffee
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto'>
        {products.map((coffee) => (
          <ProductCard key={coffee.id} coffee={coffee} products={products} setProducts={setProducts} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
