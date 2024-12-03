function InstagramSection() {
  return (
    <section className='py-16 bg-background-secondary'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 font-serif'>Follow on Instagram</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <img key={i} src={`/instagram-${i}.jpg`} alt={`Instagram post ${i}`} className='w-full h-auto rounded-lg' />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
