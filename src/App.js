import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core';
import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';

function App() {
  const [users, setUsers] = React.useState({});

  const getApi = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    setUsers(response.data)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }



  return (
    <div className="App">
    <div className="center-form">
     <div className="input-spacing"><TextField id="standard-basic" color="secondary" label="Email" /></div>
     <div className="input-spacing"><TextField id="standard-basic" label="Username" /></div>
     <div className="button-spacing"><Button variant="contained" onClick={getApi}>Default</Button></div>
      {users.map((element, index) => (
        <div className="userdata">
         <h1>{element.name}</h1>
         <div>{element.phone}</div>
         </div>
      ))}
    </div>
    </div>
  );
}

export default App;
