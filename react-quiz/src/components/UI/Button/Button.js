import React from 'react';
import classes from './Button.module.scss';

export default props => {
  const insertClasses = [classes.Button];
  const type = props.type || 'primapy';

  if (type === 'success') {
    insertClasses.push(classes.success);
  }

  if (props.disabled) {
    insertClasses.push(classes.disabled);
  }

  return (
    <div className={insertClasses.join(' ')}>
      <button
        onClick={props.onClickHandler}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  )
}
