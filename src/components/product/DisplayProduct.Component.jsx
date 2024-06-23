import React from 'react';
import ProductComponent from './Product.Component';
import redShoe from "../../assets/shoes.mjs"

// Sample product data
const products = [
  {
    id: 1,
    name: 'Jordan Proto-Lyte',
    price: 12800,
    images: {
      red: redShoe,
      black: '../../assets/blackJordan.jpg',
      orange: '/images/orange-shoe.jpg',
    },
  },
  // You can add more products here
];

const DisplayProductComponent = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductComponent
          key={product.id}
          name={product.name}
          price={product.price}
          images={product.images}
        />
      ))}
    </div>
  );
};

export default DisplayProductComponent;
