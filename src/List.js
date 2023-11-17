'use strict';
import React from 'react';

const List = (props) => {
  const list = props.items.map((i) => <li key={i}>{i}</li>);
  return <ul>{list}</ul>;
};

export default List;
