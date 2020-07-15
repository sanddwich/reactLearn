import React from 'react';
import classes from './AnswerItem.module.scss';



export default props => {
  let classeInsert= [classes.AnswerItem];
  if (props.userInsert === props.answer.id-1) {
    classeInsert.push(classes.selected)
  }
  return (<li className={classeInsert.join(' ')} onClick={() => props.onAnswerClick(props.answer.id, props.activeQuestion-1)}>
    {props.answer.text}
  </li>
  );
}