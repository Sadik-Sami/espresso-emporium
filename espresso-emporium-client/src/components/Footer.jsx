import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Espresso Emporium</h3>
            <p className='mb-4'>Always be sure your best companion, Enjoy your best moments with a sip of coffee.</p>
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-secondary' aria-label='Facebook'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                </svg>
              </a>
              <a href='#' className='hover:text-secondary' aria-label='Twitter'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                </svg>
              </a>
              <a href='#' className='hover:text-secondary' aria-label='Instagram'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                </svg>
              </a>
              <a href='#' className='hover:text-secondary' aria-label='LinkedIn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/about' className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/products' className='hover:underline'>
                  Our Products
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:underline'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <p>123 Coffee Street, Brew City, 12345</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@espressoemporium.com</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Newsletter</h3>
            <p className='mb-4'>Subscribe to our newsletter for updates and offers.</p>
            <form className='flex flex-col sm:flex-row'>
              <input
                type='email'
                placeholder='Your email'
                className='px-4 py-2 w-full sm:w-auto text-primary mb-2 sm:mb-0'
                aria-label='Email for newsletter'
              />
              <button type='submit' className='bg-secondary text-secondary-foreground px-4 py-2 sm:ml-2'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-primary-foreground/20 text-center'>
          <p>&copy; 2023 Espresso Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
