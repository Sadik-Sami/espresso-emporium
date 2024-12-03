import { useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import CustomToast from './CustomToastComponent';

// Custom Toast Hook
const useCustomToast = () => {
  const showToast = useCallback((options) => {
    const { header, message, variant = 'info', ...toastOptions } = options;

    return toast.custom((t) => <CustomToast t={t} header={header} message={message} variant={variant} />, {
      duration: 4000,
      position: 'top-right',
      ...toastOptions,
    });
  }, []);

  return { showToast };
};

// Toaster Wrapper Component
const CustomToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <Toaster
        containerStyle={{
          top: 20,
          right: 20,
        }}
      />
    </>
  );
};

export { useCustomToast, CustomToastProvider };
