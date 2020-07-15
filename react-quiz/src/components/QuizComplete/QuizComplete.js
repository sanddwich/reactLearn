import React from 'react';
import classes from './QuizComplete.module.scss';

export default (props) => {
  const successQuestions = props.quizState.filter(question => question.userInsert === question.rightAnswerId);
  // const ununsweredQuestions = props.quizState.filter(question => question.answered === false);
  // console.log(ununsweredQuestions);
  return (
    <div className={classes.QuizComplete}>
      <h1>Результат ({successQuestions.length} из {props.quizState.length}):</h1>

      {props.quizState.map((question, index) => {
        return (
          <div key={index} className={classes.QuizResult}>
            <h2>Вопрос: "{question.question}"</h2>
            {question.userInsert === question.rightAnswerId ? (
              <div className={classes.successBlock}>
                <p>Правильный ответ!</p>
                <div className={classes.success}>
                  {question.answers[question.userInsert].text}
                </div>
              </div>
            ) : (
              <div className={classes.errorBlock}>
                <p>Вы ответили неправильно!</p>
                <div className={classes.error}>                   
                {question.answers[question.userInsert].text}
                </div>
                <p>Правильный ответ:</p>
                <div className={classes.success}>
                  {question.answers[question.rightAnswerId].text}
                </div>
              </div>
            )}
          </div>
        );
      })}
      
      <button onClick={() => props.quizReset()}>Пройти тест заново</button>
    </div>
  );
};
