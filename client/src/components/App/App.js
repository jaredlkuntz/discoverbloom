import React, { Component } from 'react';
import './App.css';
import NavigationBar from '../NavBar/NavBar';
import CherokeeKeyboard from '../Keyboards/Cherokee/CherokeeKeyboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <CherokeeKeyboard />
      </div>
    );
  }
}

export default App;
