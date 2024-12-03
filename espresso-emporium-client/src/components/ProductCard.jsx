import { Eye, Edit, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProductCard({ coffee, products, setProducts }) {
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaining = products.filter((p) => p._id !== id);
              setProducts(remaining);
            } else {
              toast.error('failed to delete coffee');
            }
          });
      }
    });
  };
  return (
    <div className='bg-background-secondary p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center gap-6'>
      <div className='w-48 h-48'>
        <img src={coffee.photo} alt={coffee.name} className='w-full h-full object-contain' />
      </div>

      <div className='flex-grow space-y-2'>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-text'>Name:</span>
          <span className='text-text-secondary'>{coffee.name}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-text'>Chef:</span>
          <span className='text-text-secondary'>{coffee.chef}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-text'>Price:</span>
          <span className='text-text-secondary'>{coffee.price} Taka</span>
        </div>
      </div>

      <div className='flex md:flex-col flex-row gap-2'>
        <Link
          to={`/view-coffee/${coffee._id}`}
          className='p-2 bg-secondary rounded-lg hover:bg-secondary-hover transition-colors'>
          <Eye size={20} className='text-secondary-foreground' />
        </Link>

        <Link
          to={`/coffee/${coffee._id}`}
          className='p-2 bg-primary rounded-lg hover:bg-primary-hover transition-colors'>
          <Edit size={20} className='text-primary-foreground' />
        </Link>
        <button
          onClick={() => handleDelete(coffee._id)}
          className='p-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors'>
          <Trash2 size={20} className='text-white' />
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  coffee: PropTypes.object,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default ProductCard;
