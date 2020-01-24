import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render(){
    return(
      <div className='product'>
        <img src={this.props.img} height='180' alt={this.props.name}/>
        <div className='product-info'>
          <p>{this.props.name}</p>
          <p>{this.props.price}</p>
          <div className='product-controls'>
            <button onClick={() => this.props.deleteProductFn(this.props.id)}>Delete</button>
            <Link to={`/edit/${this.props.id}`}><button>Edit</button></Link>
          </div>
        </div>
      </div>
    )
  }
}