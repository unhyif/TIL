import React from 'react';
import classNames from 'classnames/bind';
import { useShopContext } from 'contexts/ShopContext';
import LongCartItem from 'components/LongCartItem/LongCartItem';
import Summary from 'components/Summary/Summary';
import { ListGroup } from 'react-bootstrap';
import styles from './Cart.module.scss';

const cn = classNames.bind(styles);

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useShopContext();

  return (
    <main className={cn('cart')}>
      <section className={cn('items')}>
        <ListGroup>
          {cart.map(item => (
            <LongCartItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </ListGroup>
      </section>
      <Summary cart={cart} />
    </main>
  );
};

export default Cart;
