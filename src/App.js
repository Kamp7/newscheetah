import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

document.body.style.backgroundColor="#e3f2fd"

export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News pageSize='15' />
      </>
    )
  }
}

export default App


