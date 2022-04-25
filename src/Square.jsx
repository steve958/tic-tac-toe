import React from 'react';
import './Square.scss';

const Square = (props) => {
  return (
    <button onClick={props.onClick} className="field">
      {props.value}
    </button>
  );
};

export default Square;
