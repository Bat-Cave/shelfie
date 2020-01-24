import React, { Component } from 'react';

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
            <button onClick={() => this.props.getSelectedFn(this.props.id)}>Edit</button>
          </div>
        </div>
      </div>
    )
  }
}