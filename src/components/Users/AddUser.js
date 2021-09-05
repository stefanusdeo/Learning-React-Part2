import React, { Fragment, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const addUserHandeler = (event) => {
    event.preventDefault();
    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Required',
        message: 'input Cant null',
      });
      return;
    }

    if (inputAge < 1) {
      setError({
        title: 'invalid Input',
        message: 'Age must > 1',
      });
      return;
    }

    props.onDataInput(inputUsername, inputAge);
    setInputUsername('');
    setInputAge('');
  };

  const usernameHandler = (event) => {
    setInputUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onClicked={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandeler}>
          <label htmlFor='age'>Username</label>
          <input
            type='text'
            value={inputUsername}
            id='username'
            onChange={usernameHandler}
          />
          <label htmlFor='age'>Age (year)</label>
          <input
            type='number'
            id='age'
            value={inputAge}
            onChange={ageHandler}
          />
          <Button type='submit'>Save</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
