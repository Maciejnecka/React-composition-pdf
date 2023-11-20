'use strict';
import React from 'react';
import Box from './Box';

export default class App extends React.Component {
  boxRef = React.createRef();

  componentDidMount() {
    console.log(this.boxRef.current.offsetHeight);
  }
  render() {
    return <Box ref={this.boxRef} />;
  }
}
