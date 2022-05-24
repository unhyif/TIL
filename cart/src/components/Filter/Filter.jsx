import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Rating from 'components/Rating/Rating';
import { Button, Form } from 'react-bootstrap';
import styles from './Filter.module.scss';

const cn = classNames.bind(styles);

const Filter = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = rating => setRating(rating);
  const handleClearClick = () => setRating(0);

  return (
    <div className={cn('filter', 'p-4')}>
      <h2 className={cn('title')}>Filter Products</h2>

      <div className={cn('filters')}>
        <Form.Check type="radio" name="group1" id="1" label="Ascending" />
        <Form.Check type="radio" name="group1" id="2" label="Descending" />
        <Form.Check
          type="checkbox"
          name="group1"
          id="3"
          label="Include Out Of Stock"
        />
        <Form.Check
          type="checkbox"
          name="group1"
          id="4"
          label="Fast Delivery Only"
        />
        <div>
          <span>Rating: </span>
          <Rating rating={rating} onClick={handleRatingClick} />
        </div>
      </div>

      <Button
        variant="light"
        className={cn('clear-btn', 'px-4')}
        onClick={handleClearClick}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
