'use strict';
import React from 'react';

const Button = (props) => {
  const { onClick } = props;
  return <button onClick={onClick}>add</button>;
};

export default Button;
