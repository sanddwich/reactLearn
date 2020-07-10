import React from 'react';

// function Car() {
//   return (
//     <h2>Car component</h2>
//   )
// }

// const car = () => {
//   return (
//     <h2>Car component</h2>
//   )
// }

// const car = () => <h2>Car component</h2>;

export default props => (
  <div>
    <h2>Car component</h2>
    <p>{Math.random()}</p>
    <p>Car name: {props.name}</p>
    <p>Year: {props.year}</p>
    {props.children}
  </div>
);
