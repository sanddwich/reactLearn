import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = {
    textAlign: 'center',
    color: 'green',
  };

  return (
    <div style={divStyle}>
      <h1>Hello, world!!!</h1>
      <Car name={"Ford"} year={2019} />
      <Car name={"Mazda"} year={2015} />
      <Car name={"Somebody"} year={2014}>
        <p>COLOR</p>
      </Car>
    </div>
  );
}

export default App;
