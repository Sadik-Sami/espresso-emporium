import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function EditCoffee() {
  const { id } = useParams();
  const data = useLoaderData();
  const { name, chef, supplier, taste, price, details, photo, _id } = data.data;
  console.log(name, chef, supplier, taste, price, details, photo, _id);
  const [formData, setFormData] = useState({
    name: name ? name : '',
    chef: chef ? chef : '',
    supplier: supplier ? supplier : '',
    taste: taste ? taste : '',
    price: price ? price : '',
    details: details ? details : '',
    photo: photo ? photo : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You can change this later again!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios.put(`http://localhost:5000/edit-coffee/${id}`, formData);
        if (data.success) {
          Swal.fire({
            title: 'Updated!',
            text: 'Your file has been updated.',
            icon: 'success',
          });
        }
      }
    });
  };

  return (
    <div className='min-h-screen bg-background'>
      <header className='bg-primary py-4'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-primary-foreground text-2xl font-bold'>Espresso Emporium</h1>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <Link to='/' className='inline-flex items-center text-text hover:text-text-secondary transition-colors mb-6'>
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to home
        </Link>

        <div className='max-w-4xl mx-auto bg-background-secondary rounded-lg p-8'>
          <h2 className='text-3xl font-bold text-text text-center mb-4'>Update Existing Coffee Details</h2>
          <p className='text-text-secondary text-center mb-8'>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block text-text font-medium mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-background border border-secondary/20 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary'
                />
              </div>

              <div>
                <label htmlFor='chef' className='block text-text font-medium mb-1'>
                  Chef
                </label>
                <input
                  type='text'
                  id='chef'
                  name='chef'
                  value={formData.chef}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-background border border-secondary/20 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary'
                />
              </div>

              <div>
                <label htmlFor='supplier' className='block text-text font-medium mb-1'>
                  Supplier
                </label>
                <input
                  type='text'
                  id='supplier'
                  name='supplier'
                  value={formData.supplier}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-background border border-secondary/20 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary'
                />
              </div>

              <div>
                <label htmlFor='taste' className='block text-text font-medium mb-1'>
                  Taste
                </label>
                <input
                  type='text'
                  id='taste'
                  name='taste'
                  value={formData.taste}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-background border border-secondary/20 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary'
                />
              </div>

              <div>
                <label htmlFor='price' className='block text-text font-medium mb-1'>
                  Price
                </label>
                <input
                  type='text'
                  id='price'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-background border border-secondary/20 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary'
                />
              </div>

              <div>
                <label htmlFor='details' className='block text-text font-medium mb-1'>
                  Details
                </label>
                <input
                  type='text'
                  id='details'
                  name='details'
                  value={formData.details}
                  onChange={handleChange}
                  className='w-full px-3 py-2 bg-background border border-secondary/20 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary'
                />
              </div>
            </div>

            <div>
              <label htmlFor='photo' className='block text-text font-medium mb-1'>
                Photo
              </label>
              <input
                type='text'
                id='photo'
                name='photo'
                value={formData.photo}
                onChange={handleChange}
                className='w-full px-3 py-2 bg-background border border-secondary/20 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-secondary text-secondary-foreground py-3 rounded-md hover:bg-secondary-hover transition-colors font-medium'>
              Update Coffee Details
            </button>
          </form>
        </div>
      </main>

      <footer className='bg-primary text-primary-foreground py-4 mt-12'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2023 Espresso Emporium. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
