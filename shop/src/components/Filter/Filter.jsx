import React, { useEffect } from 'react';
import { useFilterContext } from 'contexts/FilterContext';
import classNames from 'classnames/bind';
import Rating from 'components/Rating/Rating';
import { Button, Form } from 'react-bootstrap';
import styles from './Filter.module.scss';

const cn = classNames.bind(styles);

const Filter = () => {
  const {
    filters: { byAscendingPrice, byStock, byFastDelivery, rating, searchQuery },
    dispatch,
  } = useFilterContext();

  const handleAscendingChange = () =>
    dispatch({ type: 'ORDER_BY_ASCENDING_PRICE', payload: true });
  const handleDescendingChange = () =>
    dispatch({ type: 'ORDER_BY_ASCENDING_PRICE', payload: false });

  const handleStockChange = () => dispatch({ type: 'FILTER_BY_STOCK' });
  const handleDeliveryChange = () => dispatch({ type: 'FILTER_BY_DELIVERY' });
  const handleRatingClick = rating =>
    dispatch({ type: 'FILTER_BY_RATING', payload: rating });

  const clearFilters = () => dispatch({ type: 'CLEAR_FILTERS' });
  useEffect(() => {
    searchQuery && dispatch({ type: 'FILTER_BY_SEARCH', payload: '' });
    return clearFilters;
  }, []);

  return (
    <div className={cn('filter', 'p-4')}>
      <h2 className={cn('title')}>Filter Products</h2>

      <div className={cn('filters')}>
        <Form.Check
          type="radio"
          name="group1"
          id="1"
          label="Ascending"
          onChange={handleAscendingChange}
          checked={byAscendingPrice}
        />
        <Form.Check
          type="radio"
          name="group1"
          id="2"
          label="Descending"
          onChange={handleDescendingChange}
          checked={!byAscendingPrice}
        />
        <Form.Check
          type="checkbox"
          name="group1"
          id="3"
          label="Include Out Of Stock"
          onChange={handleStockChange}
          checked={byStock}
        />
        <Form.Check
          type="checkbox"
          name="group1"
          id="4"
          label="Fast Delivery Only"
          onChange={handleDeliveryChange}
          checked={byFastDelivery}
        />
        <div>
          <span>Rating: </span>
          <Rating rating={rating} onClick={handleRatingClick} />
        </div>
      </div>

      <Button
        variant="light"
        className={cn('clear-btn', 'px-4')}
        onClick={clearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
