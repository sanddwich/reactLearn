import React from 'react';
import classes from './Select.module.scss';

export default function Select(props) {
  const insertClasses = [classes.Select];
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div className={insertClasses.join(' ')}>
      <label htmlFor={htmlFor}></label>

      <select 
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option, index) => {
          return (
            <option 
              value={option.value}
              key={option.value + index}
            >
              {option.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}