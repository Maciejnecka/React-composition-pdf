'use strict';
import React from 'react';

export default class App extends React.Component {
  secRef = React.createRef();

  componentDidMount() {
    console.log(this.secRef.current.offsetHeight);
  }

  render() {
    return (
      <section ref={this.secRef}>
        <p>Lorem ipsum...</p>
      </section>
    );
  }
}
