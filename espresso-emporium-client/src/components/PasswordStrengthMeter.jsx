import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PasswordStrengthMeter = ({ password }) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const calculateStrength = () => {
      let calculatedStrength = 0;
      if (password.length > 6) calculatedStrength++;
      if (password.match(/[a-z]+/)) calculatedStrength++;
      if (password.match(/[A-Z]+/)) calculatedStrength++;
      if (password.match(/[0-9]+/)) calculatedStrength++;
      if (password.match(/[$@#&!]+/)) calculatedStrength++;
      return calculatedStrength;
    };

    setStrength(calculateStrength());
  }, [password]);

  const getColor = () => {
    switch (strength) {
      case 0:
        return 'bg-red-500';
      case 1:
        return 'bg-orange-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-lime-500';
      case 4:
        return 'bg-green-500';
      case 5:
        return 'bg-emerald-500';
      default:
        return 'bg-gray-200';
    }
  };

  const getLabel = () => {
    switch (strength) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      case 5:
        return 'Very Strong';
      default:
        return '';
    }
  };

  return (
    <div className='mt-2'>
      <div className='flex justify-between mb-1'>
        <span className='text-xs font-medium text-text-secondary'>Password strength</span>
        <span className='text-xs font-medium text-text-secondary'>{getLabel()}</span>
      </div>
      <div className='w-full bg-background rounded-full h-2.5 overflow-hidden'>
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ease-out ${getColor()}`}
          style={{ width: `${(strength / 5) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string,
};
