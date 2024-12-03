import { Link, useLoaderData } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CoffeeDetails() {
  const { data } = useLoaderData();
  const { name, chef, photo, supplier, taste, details, price } = data;

  return (
    <div className='container mx-auto px-4 py-8 my-12'>
      <Link to='/' className='inline-flex items-center text-text hover:text-text-secondary transition-colors mb-8'>
        <ArrowLeft className='mr-2 h-4 w-4' />
        Back to home
      </Link>

      <div className='max-w-4xl mx-auto bg-background-secondary rounded-lg p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
          {/* Coffee Image */}
          <div className='flex justify-center'>
            <img src={photo} alt={name} className='max-w-full h-auto rounded-lg' />
          </div>

          {/* Coffee Details */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold text-text mb-6'>Niceties</h2>

            <div className='space-y-4'>
              <div className='flex items-start gap-2'>
                <span className='font-semibold text-text min-w-[100px]'>Name:</span>
                <span className='text-text-secondary'>{name}</span>
              </div>

              <div className='flex items-start gap-2'>
                <span className='font-semibold text-text min-w-[100px]'>Chef:</span>
                <span className='text-text-secondary'>{chef}</span>
              </div>

              <div className='flex items-start gap-2'>
                <span className='font-semibold text-text min-w-[100px]'>Supplier:</span>
                <span className='text-text-secondary'>{supplier}</span>
              </div>

              <div className='flex items-start gap-2'>
                <span className='font-semibold text-text min-w-[100px]'>Taste:</span>
                <span className='text-text-secondary'>{taste}</span>
              </div>

              <div className='flex items-start gap-2'>
                <span className='font-semibold text-text min-w-[100px]'>Price:</span>
                <span className='text-text-secondary'>{price} Taka</span>
              </div>

              <div className='flex items-start gap-2'>
                <span className='font-semibold text-text min-w-[100px]'>Details:</span>
                <span className='text-text-secondary'>{details}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
