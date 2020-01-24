import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shelfie from '../../assets/shelfie_icon.png';

export default class Header extends Component {
  render(){
    return(
      <div className='header-container'>
        <img src={shelfie} alt='Shelfie Logo'/>
        <h2>SHELFIE</h2>
        <Link to='/'><p>Dashboard</p></Link>
        <Link to='/add'><p>Add</p></Link>
      </div>
    )
  }
}