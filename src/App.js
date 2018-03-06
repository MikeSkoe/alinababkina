import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//  Import Components
import Head from './components/Head';
import Portfolio from './components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }
  render() {
    return (
      <div className="App-container">
        <Head/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
