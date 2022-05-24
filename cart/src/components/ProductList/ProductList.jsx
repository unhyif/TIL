import React from 'react';
import { useShopContext } from 'contexts/ShopContext';
import Product from 'components/Product/Product';
import { Row } from 'react-bootstrap';

const ProductList = () => {
  const {
    state: { products },
  } = useShopContext();

  return (
    <Row>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Row>
  );
};

export default ProductList;
