'use strict';
import React from 'react';
import { Faq, FaqItem } from './Faq';

const App = () => {
  return (
    <Faq>
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
    </Faq>
  );
};

export default App;
