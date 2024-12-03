import React from 'react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className='bg-white rounded-lg shadow-md flex flex-col items-center text-center p-6'>
      <div className='mb-4 text-primary'>{icon}</div>
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-text-secondary'>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className='py-16 bg-background-secondary'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <FeatureCard
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M18 8h1a4 4 0 0 1 0 8h-1'></path>
                <path d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'></path>
                <line x1='6' y1='1' x2='6' y2='4'></line>
                <line x1='10' y1='1' x2='10' y2='4'></line>
                <line x1='14' y1='1' x2='14' y2='4'></line>
              </svg>
            }
            title='Awesome Aroma'
            description='You will definitely be a fan of the design & aroma of your coffee'
          />
          <FeatureCard
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <circle cx='12' cy='8' r='7'></circle>
                <polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'></polyline>
              </svg>
            }
            title='High Quality'
            description='We served the coffee to you maintaining the best quality'
          />
          <FeatureCard
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'></path>
              </svg>
            }
            title='Pure Grades'
            description='The coffee is made of the green coffee beans which you will love'
          />
          <FeatureCard
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M12 2v20M2 12h20M20 16l-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4'></path>
              </svg>
            }
            title='Proper Roasting'
            description='Your coffee is brewed by first roasting the green coffee beans'
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
