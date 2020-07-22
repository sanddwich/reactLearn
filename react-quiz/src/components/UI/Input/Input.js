import React from 'react';
import classes from './Input.module.scss';

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched;
}

export default (props) => {
  const insertClasses = [classes.Input];
  const inputType = props.type || 'text';
  const htmlFor = inputType + Math.random();

  if(isInvalid(props)) {
    insertClasses.push(classes.invalid);
  }

  return (
    <div className={insertClasses.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={(event) => props.onChange(event)}
      />

      {isInvalid(props) ? <span>{props.errorMessage || 'Поле неверно заполнено'}</span> : null}
      
    </div>
  );
};
