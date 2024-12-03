import React from 'react';

function Contact() {
  return (
    <section className='py-16 bg-background-secondary'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center font-serif'>Contact Us</h1>
        <div className='max-w-3xl mx-auto'>
          <form className='grid grid-cols-1 gap-6'>
            <div>
              <label htmlFor='name' className='block mb-2 font-semibold'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 font-semibold'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block mb-2 font-semibold'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
