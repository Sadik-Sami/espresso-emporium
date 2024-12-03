import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Reset password for:', email);
  };

  return (
    <div className='min-h-screen bg-background flex items-center justify-center px-4'>
      <div className='max-w-md w-full space-y-8 bg-background-secondary p-8 rounded-lg shadow-md'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-text'>Forgot Password</h2>
          <p className='mt-2 text-center text-sm text-text-secondary'>
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-md relative block w-full px-3 py-2 border border-secondary/20 placeholder-text-secondary text-text focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'>
              Reset Password
            </button>
          </div>
        </form>
        <div className='text-sm text-center'>
          <Link
            to='/signin'
            className='font-medium text-secondary hover:text-secondary-hover flex items-center justify-center'>
            <ArrowLeft className='h-4 w-4 mr-1' />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
