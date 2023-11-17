'use strict';
import React from 'react';
import FaqItem from './FaqItem';

export default class Faq extends React.Component {
  render() {
    return (
      <section>
        <FaqItem
          header={'Jak programowac?'}
          content={'Lorem ipsum dolor...'}
          isOpen={true}
        />
        <FaqItem
          header={'Dlaczego JavaScript?'}
          content={'Lorem ipsum dolor...'}
          isOpen={false}
        />
      </section>
    );
  }
}
