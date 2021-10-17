import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type ==='USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'ON_BLUR'){
    return {value: state.value, isValid: state.isValid}
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.length > 6}
  }
  if (action.type === 'ON_BLUR'){
    return {value: state.value, isValid: state.isValid}
  }
  return {value: '', isValid: false}
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispactchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passState, dispactchPass] = useReducer(passwordReducer, {value: '', isValid: null});

  useEffect(() => {
    console.log('EFFECT RUNNING');
    
    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);
  
  // This is also called as bebouncing 

  const {isValid:emailValidity} = emailState;
  const {isValid: passValidity} = passState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailValidity && passValidity
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailValidity, passValidity]);
 

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispactchEmail({type:'USER_INPUT', val: event.target.value});

    setFormIsValid(
      emailState.isValid && passState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispactchPass({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      emailState.isValid && passState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispactchEmail({type: 'ON_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispactchPass({type: 'ON_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
