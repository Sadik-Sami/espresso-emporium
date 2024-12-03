import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function AddCoffee() {
  const [formData, setFormData] = useState({
    name: '',
    chef: '',
    supplier: '',
    taste: '',
    price: '',
    details: '',
    photo: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { data } = await axios.post('http://localhost:5000/add-coffee', formData);
      if (data.success) {
        toast.success(data.message);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='min-h-screen bg-[#F4F3F0]'>
      <main className='container mx-auto px-4 py-8'>
        <Link to='/' className='inline-flex items-center text-[#331A15] hover:text-[#D2B48C] mb-6 mt-16'>
          <ArrowLeft className='mr-2' />
          <span>Back to home</span>
        </Link>
        <div className='bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-6'>Add New Coffee</h2>
          <p className='text-center text-gray-600 mb-8'>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]'
                  placeholder='Enter coffee name'
                />
              </div>
              <div>
                <label htmlFor='chef' className='block text-sm font-medium text-gray-700 mb-1'>
                  Chef
                </label>
                <input
                  type='text'
                  id='chef'
                  name='chef'
                  value={formData.chef}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]'
                  placeholder='Enter coffee chef'
                />
              </div>
              <div>
                <label htmlFor='supplier' className='block text-sm font-medium text-gray-700 mb-1'>
                  Supplier
                </label>
                <input
                  type='text'
                  id='supplier'
                  name='supplier'
                  value={formData.supplier}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]'
                  placeholder='Enter coffee supplier'
                />
              </div>
              <div>
                <label htmlFor='taste' className='block text-sm font-medium text-gray-700 mb-1'>
                  Taste
                </label>
                <input
                  type='text'
                  id='taste'
                  name='taste'
                  value={formData.taste}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]'
                  placeholder='Enter coffee taste'
                />
              </div>
              <div>
                <label htmlFor='price' className='block text-sm font-medium text-gray-700 mb-1'>
                  Price
                </label>
                <input
                  type='text'
                  id='price'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]'
                  placeholder='Enter coffee price'
                />
              </div>
              <div>
                <label htmlFor='details' className='block text-sm font-medium text-gray-700 mb-1'>
                  Details
                </label>
                <input
                  type='text'
                  id='details'
                  name='details'
                  value={formData.details}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]'
                  placeholder='Enter coffee details'
                />
              </div>
            </div>
            <div>
              <label htmlFor='photo' className='block text-sm font-medium text-gray-700 mb-1'>
                Photo
              </label>
              <input
                type='text'
                id='photo'
                name='photo'
                value={formData.photo}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]'
                placeholder='Enter photo URL'
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='submit'
              className='w-full bg-[#D2B48C] text-[#331A15] py-3 rounded-md font-semibold hover:bg-[#C19A6B] transition-colors duration-300'>
              Add Coffee
            </motion.button>
          </form>
        </div>
      </main>
    </div>
  );
}
