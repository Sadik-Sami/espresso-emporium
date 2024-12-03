import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{ backgroundImage: "url('/src/assets/extras/3.png')" }}></div>
      <div className='absolute inset-0  z-10'></div>
      <div className='relative z-20 text-center px-4'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-6xl font-bold text-primary-foreground mb-4 font-serif'>
          Espresso Emporium
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-xl md:text-2xl text-primary-foreground mb-8 max-w-2xl mx-auto'>
          Would you like a Cup of Delicious Coffee?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Link
            to='/products'
            className='bg-secondary text-secondary-foreground px-6 py-3 rounded-md text-lg font-semibold hover:bg-secondary-hover transition-colors inline-block'>
            Explore Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
