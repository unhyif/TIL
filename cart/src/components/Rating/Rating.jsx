import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating, onClick }) =>
  [...Array(5)].map((_, index) => (
    <button key={index} onClick={() => onClick(index + 1)}>
      {index + 1 <= rating ? (
        <AiFillStar color="white" />
      ) : (
        <AiOutlineStar color="white" />
      )}
    </button>
  ));

export default Rating;
