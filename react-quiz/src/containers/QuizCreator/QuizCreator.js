import React from 'react';
import classes from './QuizCreator.module.scss';

export default class QuizCreator extends React.Component {
  render() {
    const insertClasses = [classes.QuizCreator];

    return (
      <div className={insertClasses.join(' ')}>
        <div>
          <h1>Страница создания теста</h1>
        </div>
      </div>
    );
  }
}
