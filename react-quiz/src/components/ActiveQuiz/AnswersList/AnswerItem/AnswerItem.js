import React from 'react';
import classes from './AnswerItem.module.scss';

export default props => (
  <li className={classes.AnswerItem}>
    {props.answer.text}
  </li>
)