import React from 'react';
import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

export default (props) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.TitleQuestion}>
      <span>
        <strong>{props.activeQuestion}.</strong>&nbsp;
        {props.question}
      </span>

      <small>
        ({props.activeQuestion} из {props.quizLength})
      </small>
    </p>

    {props.userAnswered ? (
      <small style={{color: 'green'}}> <i className="fa fa-check">&nbsp; Вы уже ответили на данный вопрос</i></small>
    ) : (
      <small style={{color: 'red'}}> <i className="fa fa-times-circle">&nbsp; Вы еще не ответили на данный вопрос</i> </small>
    )}

    <div className={classes.questionNav}>
      <span
        className={classes.questionNavAction}
        onClick={() => props.prevQuestion(props.activeQuestion - 1)}
      >
        {' '}
        {'<< Пред. вопрос'}{' '}
      </span>
      <span
        className={classes.questionNavAction}
        onClick={() => props.nextQuestion(props.activeQuestion + 1)}
      >
        {' '}
        {'След. вопрос >>'}{' '}
      </span>
    </div>

    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      activeQuestion={props.activeQuestion}
      userInsert={props.userInsert}
    />
  </div>
);
