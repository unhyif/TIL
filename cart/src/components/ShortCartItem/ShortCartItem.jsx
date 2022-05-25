import React from 'react';
import classNames from 'classnames/bind';
import { Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import styles from './ShortCartItem.module.scss';

const cn = classNames.bind(styles);

const ShortCartItem = ({ item, dispatch }) => (
  <Card style={{ width: '15rem' }}>
    <Card.Header>{item.name}</Card.Header>
    <Card.Body className={cn('body')}>
      <img className={cn('image')} src={item.image} alt={item.name} />
      <div className={cn('detail')}>
        <span>$ {item.price.split('.')[0]}</span>
        <button
          onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
        >
          <AiFillDelete size="1.5em" color="black" />
        </button>
      </div>
    </Card.Body>
  </Card>
);

export default ShortCartItem;
