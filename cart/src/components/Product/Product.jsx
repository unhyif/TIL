import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cn = classNames.bind(styles);

const Product = ({
  product: { image, name, price, fastDelivery, ratings },
}) => (
  <li className={cn('product')}>
    <img className={cn('image')} src={image} alt={name} />
    <h3 className={cn('name')}>{name}</h3>
    <span className={cn('price')}>{price}</span>
    {/* <span className={cn('delivery')}>{fastDelivery}</span> */}
    <span className={cn('ratings')}>{ratings}</span>
  </li>
);

export default Product;
