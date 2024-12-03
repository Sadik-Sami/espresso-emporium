import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center h-screen'>
      <h1 className='mb-4 text-9xl font-semibold text-primary'>404</h1>
      <p className='mb-8 text-4xl text-gray-600'>Oops! Looks like you're lost.</p>
      <div className='animate-bounce'>
        <svg className='mx-auto h-32 w-32 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'></path>
        </svg>
      </div>
      <p className='mt-4 text-gray-600'>
        Let's get you back{' '}
        <Link to='/' className='text-secondary'>
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default Error;
