'use strict';
import React from 'react';

export default class FaqItem extends React.Component {
  static displayName = 'FaqItem';
  render() {
    const { header, content, isOpen } = this.props;
    const style = { display: isOpen ? 'block' : 'none' };
    return (
      <>
        <header>{header}</header>
        <article style={style}>{content}</article>
      </>
    );
  }
}
