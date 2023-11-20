'use strict';
import React from 'react';
export default class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.input.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input defaultValue="Wpisz..." ref={(node) => (this.input = node)} />
        <input type="submit" />
      </form>
    );
  }
}
