import './App.scss';
import React, { Component } from 'react';
import { InAppDial } from 'components';

class App extends Component {

  render() {
    return (
      <div className="app">
        <InAppDial name="Matt" url="http://localhost:2255/token" phone="+61490037586" fromPhone="+61490037586" />
      </div>
    );
  }
}

export default App;
