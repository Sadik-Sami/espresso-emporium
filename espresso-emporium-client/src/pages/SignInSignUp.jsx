import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail } from 'lucide-react';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { AuthContext } from '@/context/AuthContext';
import { useCustomToast } from '@/components/CustomToastHook';

export default function SignInSignUp() {
  const location = useLocation();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { showToast } = useCustomToast();
  const { createUser, userName, signIn, signInWithGoogle } = useContext(AuthContext);

  const extractFirebaseErrorMessage = (error) => {
    return error.message.split('/').pop().replace(')', '');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(isSignIn ? 'Sign In' : 'Sign Up', { email, password, name });
    try {
      if (isSignIn) {
        console.log('Trying to sign in');
        await signIn(email, password);
      } else {
        console.log('trying to sign up');
        await createUser(email, password);
        if (name) {
          await userName(name);
        }
      }
      showToast({
        header: isSignIn ? 'Signin Successful' : 'Login Successful',
        message: 'Hello and Welcome to espresso emporium',
        variant: 'success',
      });
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      const cleanErrorMessage = extractFirebaseErrorMessage(error);
      showToast({
        header: 'Error',
        message: cleanErrorMessage,
        variant: 'error',
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      showToast({
        header: 'Successful!',
        message: 'Welcome back to espresso emporium',
        variant: 'success',
      });
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      showToast({
        header: 'Google Authentication Error',
        message: error.message,
        variant: 'error',
      });
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password', { state: { email } });
  };

  return (
    <div className='min-h-screen bg-background flex items-center justify-center px-4'>
      <div className='max-w-md w-full space-y-8 bg-background-secondary p-8 rounded-lg shadow-md'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-text'>
            {isSignIn ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>
        <div className='flex justify-center space-x-4 mb-8'>
          <button
            className={`px-4 py-2 rounded-md ${
              isSignIn ? 'bg-primary text-primary-foreground' : 'bg-background text-text'
            }`}
            onClick={() => setIsSignIn(true)}>
            Sign In
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              !isSignIn ? 'bg-primary text-primary-foreground' : 'bg-background text-text'
            }`}
            onClick={() => setIsSignIn(false)}>
            Sign Up
          </button>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm -space-y-px'>
            {!isSignIn && (
              <div>
                <label htmlFor='name' className='sr-only'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-secondary/20 placeholder-text-secondary text-text rounded-t-md focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
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
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-secondary/20 placeholder-text-secondary text-text ${
                  isSignIn ? 'rounded-t-md' : ''
                } focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm`}
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='relative'>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-secondary/20 placeholder-text-secondary text-text rounded-b-md focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff className='h-5 w-5 text-text-secondary' />
                ) : (
                  <Eye className='h-5 w-5 text-text-secondary' />
                )}
              </button>
            </div>
          </div>

          {!isSignIn && <PasswordStrengthMeter password={password} />}

          {isSignIn && (
            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <button
                  type='button'
                  onClick={handleForgotPassword}
                  className='font-medium text-secondary hover:text-secondary-hover'>
                  Forgot your password?
                </button>
              </div>
            </div>
          )}

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'>
              {isSignIn ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </form>

        {isSignIn && (
          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-secondary/20'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-background-secondary text-text-secondary'>Or continue with</span>
              </div>
            </div>

            <div className='mt-6'>
              <button
                onClick={handleGoogleSignIn}
                className='w-full flex items-center justify-center px-4 py-2 border border-secondary/20 rounded-md shadow-sm text-sm font-medium text-text-secondary bg-background hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'>
                <Mail className='h-5 w-5 mr-2' />
                Sign in with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
