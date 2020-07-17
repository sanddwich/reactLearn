import React from 'react';
import classes from './Button.module.scss';

export default props => {
  const insertClasses = [classes.Button]

  return (
    <div className={insertClasses}>
      <button onClick={props.onClickHandler}>
        {props.children}
      </button>
    </div>
  )
}
