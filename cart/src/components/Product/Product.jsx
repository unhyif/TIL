import React from 'react';
import classNames from 'classnames/bind';
import { useShopContext } from 'contexts/ShopContext';
import { Button, Col } from 'react-bootstrap';
import styles from './Product.module.scss';

const cn = classNames.bind(styles);

const Product = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = useShopContext();

  return (
    <Col xs={4} className={cn('p-4')}>
      <li className={cn('product')}>
        <img className={cn('image')} src={product.image} alt={product.name} />

        <h3 className={cn('name')}>{product.name}</h3>

        <span className={cn('price')}>$ {product.price.split('.')[0]}</span>
        <span className={cn('delivery')}>
          {product.fastDelivery ? 'Fast Delivery' : '4 days Delivery'}
        </span>
        <span className={cn('rating')}>{product.rating}</span>

        {!cart.some(item => item.id === product.id) ? (
          <Button
            variant="primary"
            className={cn('cart-btn')}
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        ) : (
          <Button
            variant="danger"
            className={cn('cart-btn')}
            onClick={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: product })
            }
          >
            Remove from Cart
          </Button>
        )}
      </li>
    </Col>
  );
};

export default Product;
