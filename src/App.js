import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//  Import Components
import Head from './components/Head';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

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
        <Contacts/>
      </div>
    );
  }
}

export default App;
