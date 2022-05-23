import React from 'react';
import { useShopContext } from 'contexts/ShopContext';
import Product from 'components/Product/Product';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const {
    state: { products },
  } = useShopContext();

  return (
    <ul className={styles.products}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
