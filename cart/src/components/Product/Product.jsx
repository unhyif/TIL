import React from 'react';
import classNames from 'classnames/bind';
import { Button, Col } from 'react-bootstrap';
import styles from './Product.module.scss';

const cn = classNames.bind(styles);

const Product = ({
  product: { image, name, price, fastDelivery, ratings },
}) => (
  <Col xs={4} className={cn('p-4')}>
    <li className={cn('product')}>
      <img className={cn('image')} src={image} alt={name} />
      <h3 className={cn('name')}>{name}</h3>
      <span className={cn('price')}>{price}</span>
      {/* <span className={cn('delivery')}>{fastDelivery}</span> */}
      <span className={cn('ratings')}>{ratings}</span>
      <Button variant="primary">Add to Cart</Button>
    </li>
  </Col>
);

export default Product;
