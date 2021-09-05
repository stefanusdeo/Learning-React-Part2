import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClicked} />;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClicked}>Okey</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClicked={props.onClicked} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClicked={props.onClicked}
        />,
        document.getElementById('modalError')
      )}
    </Fragment>
  );
};

export default ErrorModal;
