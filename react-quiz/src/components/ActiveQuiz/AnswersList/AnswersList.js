import React from 'react';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';

export default (props) => (
  <div className={classes.AnswersList}>
    <ul>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            activeQuestion={props.activeQuestion}
            userInsert={props.userInsert}
          />
        );
      })}
    </ul>
  </div>
);
