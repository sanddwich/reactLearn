import React from 'react';
import classes from './MenuToggle.module.scss';

export default (props) => {
  let insertClasses = [classes.MenuToggle, 'fa'];

  if (props.isOpen) {
    insertClasses.push('fa-times');
    insertClasses.push(classes.open);
  } else {
    insertClasses.push('fa-bars');
  }
  return (
    <i className={insertClasses.join(' ')} onClick={() => props.onToggle()}></i>
  );
};
