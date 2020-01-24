import React, { Component } from 'react';
import Form from '../Form/Form';
import Product from'../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id){
    axios.delete(`http://localhost:5050/api/product/${id}`).then(res => {
      this.props.getProductsFn();
    }).catch( err => console.log(err));
  }

  render(){
    const productListMapped = this.props.productList.map((product, i) => {
      return(
        <Product 
          key={i}
          id={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          deleteProductFn={this.deleteProduct}
          getSelectedFn={this.props.getSelectedFn}
        />
      )
    })

    return(
      <div className='dashboard-container'>
        <div className='product-container'>
          {productListMapped}
        </div>
        <Form 
          getProductsFn={this.props.getProductsFn}
          selected={this.props.selected}
        /> 
      </div>
    )
  }
}