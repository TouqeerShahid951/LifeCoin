// App.js
import React from 'react';
import SendLifeCoin from "./components/SendLifeCoin";
import Navbar from './components/Navbar';
import './App.css'; // Import the CSS file for styling
const App = () => {
  return <>
    <Navbar></Navbar>
    <div>
      <h1>Welcome to the LifeCoin App</h1>
      <SendLifeCoin />
    </div></>


};

export default App;
