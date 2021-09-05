import React, { Fragment, useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [inputData, setInputData] = useState([]);

  const inputDataHandler = (uName, uAge) => {
    setInputData((prevData) => {
      return [
        ...prevData,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onDataInput={inputDataHandler} />
      <UserList users={inputData} />
    </Fragment>
  );
}

export default App;
