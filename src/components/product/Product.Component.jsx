import React, { useState } from 'react';

const ProductComponent = ({ name, price, images }) => {
  const [currentColor, setCurrentColor] = useState('orange');
  const [currentImage, setCurrentImage] = useState(images.orange);

  const handleColorChange = (color) => {
    setCurrentColor(color);
    setCurrentImage(images[color]);
  };

  return (
    <div style={{ backgroundColor: currentColor, padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
      <h1>{name}</h1>
      <img src={currentImage} alt={`${currentColor} shoe`} style={{ width: '300px', height: 'auto' }} />
      <p>Running Collection</p>
      <p>Rs. {price}</p>
      <div>
        <button onClick={() => handleColorChange('red')} style={{ backgroundColor: 'red', padding: '10px', margin: '5px' }}>Red</button>
        <button onClick={() => handleColorChange('black')} style={{ backgroundColor: 'black', color: 'white', padding: '10px', margin: '5px' }}>Black</button>
        <button onClick={() => handleColorChange('orange')} style={{ backgroundColor: 'orange', padding: '10px', margin: '5px' }}>Orange</button>
      </div>
    </div>
  );
};

export default ProductComponent;
