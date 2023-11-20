'use strict';
import React from 'react';

const Box = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>Box</h1>
    </section>
  );
});

export default Box;
