import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes'
import { HashRouter } from 'react-router-dom';

export default class App extends Component{
  render(){
    return (
      <HashRouter>
      <div>
        <Header />
        {routes}
      </div>
      </HashRouter>
    );
  }
}
