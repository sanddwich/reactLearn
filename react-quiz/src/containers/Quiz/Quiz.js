import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета снег?',
        answers: [
          {text: 'Белый', id: 1},
          {text: 'Красный', id: 2},
          {text: 'Желтый', id: 3},
          {text: 'Черный', id: 4},
        ]
      }
    ],
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} question={this.state.quiz[0].question} />
        </div>
      </div>
    );
  }
}

export default Quiz;
