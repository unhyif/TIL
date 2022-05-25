import React from 'react';
import { useShopContext } from 'contexts/ShopContext';
import { useFilterContext } from 'contexts/FilterContext';
import Product from 'components/Product/Product';
import { Row } from 'react-bootstrap';

const ProductList = () => {
  const {
    state: { products },
  } = useShopContext();

  const {
    filters: { byAscendingPrice, byStock, byFastDelivery, rating, searchQuery },
  } = useFilterContext();

  function transformProducts(products) {
    let result;
    result = searchQuery
      ? products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products;

    result = byAscendingPrice
      ? result.sort((a, b) => a.price - b.price)
      : result.sort((a, b) => b.price - a.price);

    result = byStock ? result : result.filter(product => product.inStock);

    result = byFastDelivery
      ? result.filter(product => product.fastDelivery)
      : result;

    result =
      rating > 1 ? result.filter(product => product.rating >= rating) : result;
    return result;
  }

  return (
    <Row>
      {transformProducts(products).map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Row>
  );
};

export default ProductList;
