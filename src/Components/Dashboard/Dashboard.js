import React, { Component } from 'react';
import Product from'../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      productList: []
    }

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  componentDidUpdate(){
    this.getProducts();
  }

  getProducts = () => {
    axios.get('http://localhost:5050/api/inventory')
    .then(res => {
      this.setState({productList: res.data})
    })
    .catch(err => {
      console.log('An error occurred when requesting the product list.')
    })
  }

  deleteProduct(id){
    axios.delete(`http://localhost:5050/api/product/${id}`).then(res => {
      this.getProducts()
    }).catch( err => console.log(err));
  }

  render(){
    const productListMapped = this.state.productList.map((product, i) => {
      return(
        <Product 
          key={i}
          id={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          deleteProductFn={this.deleteProduct}
        />
      )
    })

    return(
      <div className='dashboard-container'>
        <div className='product-container'>
          {productListMapped}
        </div>
      </div>
    )
  }
}