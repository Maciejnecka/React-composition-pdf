'use strict';
import React from 'react';
import Box from './Box';
export default class App extends React.Component {
  componentDidMount() {
    console.log(this.boxRef.getHeight());
  }
  render() {
    return <Box ref={this.boxRef} />;
  }
}
