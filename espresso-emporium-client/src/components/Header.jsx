import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronDown, LogOut, UserCircle } from 'lucide-react';
import { AuthContext } from '@/context/AuthContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const { user, logOut } = useContext(AuthContext);
  // Mock user state - replace with actual auth logic

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [path]);

  const handleLogout = () => {
    logOut();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        path === '/' ? (isScrolled ? 'bg-primary shadow-md' : 'bg-transparent') : 'bg-primary'
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link to='/' className='flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-secondary'
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
            <span className='text-xl font-bold font-serif text-primary-foreground'>Espresso Emporium</span>
          </Link>
          <nav className='hidden md:flex items-center space-x-6'>
            <ul className='flex space-x-6'>
              <li>
                <Link to='/' className='text-primary-foreground hover:text-secondary transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/products' className='text-primary-foreground hover:text-secondary transition-colors'>
                  Products
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-primary-foreground hover:text-secondary transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-primary-foreground hover:text-secondary transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
            {user ? (
              <div className='relative'>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className='flex items-center space-x-2 text-primary-foreground hover:text-secondary transition-colors focus:outline-none'>
                  <User className='h-6 w-6' />
                  <span>{user.displayName}</span>
                  <ChevronDown className='h-4 w-4' />
                </button>
                {isProfileOpen && (
                  <div className='absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1'>
                    <Link
                      to='/profile'
                      className='block px-4 py-2 text-sm text-text hover:bg-background-secondary'
                      onClick={() => setIsProfileOpen(false)}>
                      <UserCircle className='inline-block h-4 w-4 mr-2' />
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className='block w-full text-left px-4 py-2 text-sm text-text hover:bg-background-secondary'>
                      <LogOut className='inline-block h-4 w-4 mr-2' />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to='/signin' className='text-primary-foreground hover:text-secondary transition-colors'>
                Log In
              </Link>
            )}
          </nav>
          <button
            className='md:hidden text-primary-foreground'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-primary shadow-lg'>
            <nav className='container mx-auto px-4 py-4'>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to='/'
                    className='block text-primary-foreground hover:text-secondary transition-colors'
                    onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/products'
                    className='block text-primary-foreground hover:text-secondary transition-colors'
                    onClick={() => setIsMenuOpen(false)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='block text-primary-foreground hover:text-secondary transition-colors'
                    onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='block text-primary-foreground hover:text-secondary transition-colors'
                    onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link
                        to='/profile'
                        className='block text-primary-foreground hover:text-secondary transition-colors'
                        onClick={() => setIsMenuOpen(false)}>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className='block w-full text-left text-primary-foreground hover:text-secondary transition-colors'>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      to='/signin'
                      className='block text-primary-foreground hover:text-secondary transition-colors'
                      onClick={() => setIsMenuOpen(false)}>
                      Log In
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
