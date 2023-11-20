'use strict';
import React from 'react';

export default class Lifecycle extends React.Component {
  state = { numbersList: [] };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    const { numbersList } = nextState;
    const { length } = numbersList;
    if (length > 3 && length < 7) {
      console.log(false);
      return false;
    }
    console.log(true);
    return true;
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', this);

    const { number } = props;
    const { numberList } = state;
    if (numberList.includes(number)) {
      return null;
    }
    return {
      numberList: [...numberList, number],
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }
  render() {
    console.log('render');
    const { numbersList } = this.state;
    return (
      <>
        <h2>Lifecycle</h2>
        <ul ref={(el) => (this.refUl = el)}>
          {numbersList.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </>
    );
  }
}
