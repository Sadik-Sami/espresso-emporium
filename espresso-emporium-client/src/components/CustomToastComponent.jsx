import toast from 'react-hot-toast';
import { variantStyles } from './CustomToastTypes';

const CustomToast = ({ t, header, message, variant = 'info' }) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={`
        ${styles.background}
        ${t.visible ? 'animate-enter' : 'animate-leave'}
        max-w-md w-full shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5
      `}>
      <div className='flex-1 w-0 p-4'>
        <div className='flex items-start'>
          <div className='mr-3 text-2xl'>{styles.icon}</div>
          <div className='flex-1'>
            <p className={`text-sm font-medium ${styles.headerColor}`}>{header}</p>
            <p className={`mt-1 text-sm ${styles.messageColor}`}>{message}</p>
          </div>
        </div>
        <div className='flex mt-2'>
          <button
            onClick={() => toast.dismiss(t.id)}
            className='ml-auto bg-background rounded-md text-text hover:text-gray-900 focus:outline-none'>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomToast;
