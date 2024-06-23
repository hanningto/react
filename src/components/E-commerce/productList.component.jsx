import React from 'react';
import ProductComponent from './product.component';

function ProductListComponent({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListComponent;
