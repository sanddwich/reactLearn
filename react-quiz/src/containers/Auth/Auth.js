import React from 'react';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends React.Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный Email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        }
      },
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

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (validation.email) {
      isValid = this.validateEmail(value);
    }
    if (validation.minLength) {
      isValid = value.trim().length > validation.minLength && isValid
    }
    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    // console.log('onChange at input with ID: ', event);
    const formControls = { ...this.state.formControls };
    const control = {...formControls[controlName]};

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input 
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    const insertClasses = [classes.Auth];

    return (
      <div className={insertClasses.join(' ')}>
        <div className={classes.AuthForm}>
          <h1>Форма авторизации.</h1>
          <form onSubmit={this.submitHandler}>

            { this.renderInputs() }

            <div className={classes.ActionButton}>
              <Button 
                type="primary"
                onClickHandler={this.regHandler}
              >
                Регистрация
              </Button>
              <Button 
                type="success"
                onClickHandler={this.authHandler}
                disabled={!this.state.isFormValid}
              >
                Авторизация
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
