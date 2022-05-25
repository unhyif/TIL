import React from 'react';
import { useShopContext } from 'contexts/ShopContext';
import { useFilterContext } from 'contexts/FilterContext';
import Product from 'components/Product/Product';
import { Row } from 'react-bootstrap';

const ProductList = () => {
  let {
    state: { products },
  } = useShopContext();
  const { filters } = useFilterContext();

  products = filters.inStock
    ? products.filter(product => product.inStock > 0)
    : products;
  products = filters.fastDelivery
    ? products.filter(product => product.fastDelivery)
    : products;

  return (
    <Row>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Row>
  );
};

export default ProductList;
