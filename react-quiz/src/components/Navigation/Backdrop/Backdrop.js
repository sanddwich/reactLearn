import React from 'react';
import classes from './Backdrop.module.scss';

export default (props) => {
  const insertClasses = [classes.Backdrop];

  if (!props.isOpen) {
    insertClasses.push(classes.close);
  }

  return <div className={insertClasses.join(' ')}></div>;
};
