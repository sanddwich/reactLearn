import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Quiz from '../../containers/Quiz/Quiz';

class Layout extends Component {
  render() {
    // console.log(classes);
    return (
      <div className={classes.Layout}>
        <h1>mainLayout</h1>

        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default Layout;
