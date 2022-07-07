import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import AuthContext from '../../store/auth-context';

import Input from '../UI/Input/Input';

import Card from '../UI/Card/Card';

import classes from './Login.module.css';

import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = (props) => {
  const ctx = useContext(AuthContext)
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('validating')
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP')
      clearTimeout(timeoutId)
    }
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <Input
          id='email'
          label='E-Mail'
          type='email'
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          validateHandler={validateEmailHandler}
          ref={emailInputRef}
        />

        <Input
          id='password'
          label='Password'
          type='password'
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
          ref={passwordInputRef}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
