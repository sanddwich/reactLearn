import React from 'react';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends React.Component {
  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Ввудите корректный Email',
      },
      password: {},
    }
  }
  
  authHandler = () => {
    console.log('AuthButton');
  };

  regHandler = () => {
    console.log('RegButton');
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  onChangeHandler = (input) => {
    console.log('onChange at input with ID: ', input);
  }

  render() {
    const insertClasses = [classes.Auth];

    return (
      <div className={insertClasses.join(' ')}>
        <div className={classes.AuthForm}>
          <h1>Форма авторизации.</h1>
          <form onSubmit={this.submitHandler}>
            <Input onChange={this.onChangeHandler} label='Email' />
            {/* <Input onChange={this.onChangeHandler} label='Пароль' errorMessage={'TEST'} /> */}

            <div className={classes.ActionButton}>
              <Button onClickHandler={this.regHandler}>Регистрация</Button>
              <Button onClickHandler={this.authHandler}>Авторизация</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
