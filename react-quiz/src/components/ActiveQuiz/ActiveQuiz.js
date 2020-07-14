import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

export default props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.TitleQuestion}>
      <span>
        <strong>2.</strong>&nbsp;
        {props.question}
      </span>

      <small>(4 из 12)</small>
    </p>

    <AnswersList 
      answers={props.answers}
    />

  </div>
)