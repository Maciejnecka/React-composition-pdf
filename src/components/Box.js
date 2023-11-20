'use strict';
import React from 'react';

export default class Box extends React.Component {
  getHeight() {
    return this.sec.offsetHeight;
  }

  render() {
    return (
      <section ref={(el) => (this.sec = el)}>
        <h1>Box</h1>
      </section>
    );
  }
}
