import React from 'react';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import styles from './Summary.module.scss';

const cn = classNames.bind(styles);

const Summary = ({ cart }) => (
  <div className={cn('summary', 'p-4')}>
    <h2 className={cn('title')}>
      Subtotal {cart.length} item{cart.length > 1 && 's'}
    </h2>
    <strong className={cn('price')}>
      Total: ${' '}
      {cart.reduce(
        (prev, curr) => Number(prev) + Number(curr.price) * curr.quantity,
        0
      )}
    </strong>
    <Button
      variant="primary"
      className={cn('checkout-btn', 'w-100')}
      disabled={!cart.length}
    >
      Proceed to Checkout
    </Button>
  </div>
);

export default Summary;
