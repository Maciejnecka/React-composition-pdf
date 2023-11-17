'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
const root = createRoot(document.querySelector('#root'));

const List = (props) => {
  const { items } = props;
  const list = items.map((n, key) => <Item key={key} name={n} />);
  return <ul>{list}</ul>;
};

const Item = (props) => {
  return <li>{props.name}</li>;
};

root.render(<List items={['Jan', 'Anna']} />);
