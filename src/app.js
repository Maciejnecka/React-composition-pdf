'use strict';
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { v4 as uuid } from 'uuid';
// import './styles/main.css';

// const List = (props) => {
//   const { items } = props;
//   const list = items.map((n) => <Item name={n} />);
//   return <ul>{list}</ul>;
// };

// const Item = (props) => {
//   return <li>{props.name}</li>;
// };

// root.render(<List items={['Jan', 'Anna']} />);
// const List = (props) => {
//   const { items } = props;
//   const list = items.map((i) => {
//     return <Item key={i.id} name={i.name} />;
//   });
//   return <ul>{list}</ul>;
// };

// const List = (props) => {
//   const { items } = props;
//   const list = items.map((i) => {
//     return (
//       <div kry={i.id}>
//         <Item name={i.name} />
//       </div>
//     );
//   });
//   return <ul>{list}</ul>;
// };

// const List = (props) => {
//   const { items } = props;
//   const list = items.map((i) => {
//     return (
//       <React.Fragment key={i.id}>
//         <Item name={i.name} />
//       </React.Fragment>
//     );
//   });
//   return <ul>{list}</ul>;
// };

// const Item = (props) => {
//   return <li>{props.name}</li>;
// };

// const items = [
//   { name: 'Jan', id: uuid() },
//   { name: 'Anna', id: uuid() },
// ];
// import Button from './Button';
// import List from './List';

// class App extends React.Component {
//   state = { numbers: [] };

//   addNumber = () => {
//     const number = Math.random();
//     this.setState((state) => {
//       return {
//         numbers: [...state.numbers, number],
//       };
//     });
//   };

//   render() {
//     return (
//       <section>
//         <Button onClick={this.addNumber} />
//         <List items={this.state.numbers} />
//       </section>
//     );
//   }
// }

// root.render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
