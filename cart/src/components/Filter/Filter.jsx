import React from 'react';
import classNames from 'classnames/bind';
import { Button, Form } from 'react-bootstrap';
import styles from './Filter.module.scss';

const cn = classNames.bind(styles);

const Filter = () => (
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
      <span>Rating: </span>
    </div>
    <Button variant="light" className={cn('clear-btn', 'px-4')}>
      Clear Filters
    </Button>
  </div>
);

export default Filter;
