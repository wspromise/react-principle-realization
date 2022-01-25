import React from './react.js';
// import React from 'react';

let tsx = (
  <h1 className="hello" style={{ color: 'red' }}>
    hello
    <span>123</span>
  </h1>
);

console.log(tsx, '11111');

// React.createElement(
//   'h1',
//   {
//     className: 'hello',
//     style: {
//       color: 'red',
//     },
//   },
//   'hello'
// );

/**
  * $$typeof: Symbol(react.element)
    dom: h1.hello
    key: undefined
    props: {className: 'hello', style: {…}, children: {…}}
    ref: undefined
    type: "h1"
 */
