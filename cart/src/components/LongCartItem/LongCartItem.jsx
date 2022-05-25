import React from 'react';
import Rating from 'components/Rating/Rating';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

const LongCartItem = ({ item, dispatch }) => (
  <ListGroup.Item className="p-3">
    <Row className="align-items-center text-center">
      <Col xs={2}>
        {<img className="w-100 rounded" src={item.image} alt={item.name} />}
      </Col>
      <Col xs={2}>{item.name}</Col>
      <Col xs={2}>
        <Rating rating={item.rating} onClick={() => {}} />
      </Col>
      <Col xs={2}>$ {item.price.split('.')[0]}</Col>
      <Col xs={2}>
        <Form.Select aria-label="quantity" value={item.quantity}>
          {[...Array(item.inStock).keys()].map(i => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={2}>
        <button
          onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
        >
          <AiFillDelete size="1.5em" color="black" />
        </button>
      </Col>
    </Row>
  </ListGroup.Item>
);

export default LongCartItem;
