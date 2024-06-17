import React from 'react';
import './button.css';

const Button = ({ onClick, children, type = 'button' }) => {
  return (
    <button id='button' onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
