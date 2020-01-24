import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shelfie from '../../assets/shelfie_icon.png';

export default class Header extends Component {
  render(){
    return(
      <div className='header-container'>
        <img src={shelfie} alt='Shelfie Logo'/>
        <Link to='/'><a>Dashboard</a></Link>
        <Link to='/add'><a>Add</a></Link>
      </div>
    )
  }
}