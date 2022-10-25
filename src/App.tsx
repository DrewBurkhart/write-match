import React from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from './utils/firebase';
import AddDoc from './components/addDoc'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddDoc />
      </header>
    </div>
  );
}

export default App;
