import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      imgInput: '',
      nameInput: '',
      priceInput: '',
      editing: false
    }
  }

  handleInput(name, val){
    this.setState({[name]: val});
  }

  cancelInput(){
    this.setState({imgInput: '', nameInput: '', priceInput: ''});
  }

  createProduct(){
    const { imgInput, nameInput, priceInput } = this.state;

    axios.post('http://localhost:5050/api/product', {img: imgInput, name: nameInput, price: priceInput}).then(res => {
      this.props.getProductsFn();
      this.cancelInput();
      console.log(`Adding product to product list with img: ${imgInput}, name: ${nameInput}, and price: ${priceInput}`)
    }).catch(err => console.log(err));

    this.props.getProductsFn();
    this.cancelInput();
  }

  updateProduct(id){
    const { imgInput, nameInput, priceInput } = this.state;

    axios.post('http://localhost:5050/api/product', {img: imgInput, name: nameInput, price: priceInput}).then(res => {
      console.log(`Adding product to product list with img: ${imgInput}, name: ${nameInput}, and price: ${priceInput}`)
    }).catch(err => console.log(err));

    this.props.getProductsFn();
    this.cancelInput();
  }

  render(){
    return(
      <section className='form-container'>
        <div className='image-preview'>Image Preview</div>
        <div className='form-input'>
          <p>Image URL:</p>
          <input value={this.state.imgInput} type='text' name='imgInput' onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className='form-input'>
          <p>Product Name:</p>
          <input value={this.state.nameInput}  type='text' name='nameInput' onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className='form-input'>
          <p>Price:</p>
          <input value={this.state.priceInput}  type='number' name='priceInput' onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
        </div>
        <div className='button-container'>
          <button onClick={() => this.cancelInput()}>Cancel</button>
          {!this.state.editing ?
              <button onClick={() => this.createProduct()}>Add to Inventory</button>
            :
              <button onClick={() => this.updateProduct()}>Save</button>
          }
        </div>
      </section>
    )
  }
}