import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from './Components/Card';
import { Timer } from './Components/Timer';
import { Input } from './Components/Input';
import { Scroll } from './Components/Scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Card />
          <Timer />
          <Input />
          <Scroll />
      </div>
    );
  }
}

export default App;
