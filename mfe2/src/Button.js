import React from 'react';

const handleClick = () => {
  alert('hi');
}


const Button = () => (
  <button style={{padding:'20px', margin: '20px'}} onClick={handleClick} >MFE2 Harel Button</button>
);
export default Button;