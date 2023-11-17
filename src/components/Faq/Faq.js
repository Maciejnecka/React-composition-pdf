'use strict';
import React from 'react';

export default class Faq extends React.Component {
  render() {
    const { children } = this.props;
    return <section>{children}</section>;
  }
}
