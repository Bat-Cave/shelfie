import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  _isMounted = false;

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
    console.log(this.props.match);
    this.setState({[name]: val});
  }

  cancelInput(){
    this.setState({imgInput: '', nameInput: '', priceInput: '', editing: false});
  }

  createProduct(){
    const { imgInput, nameInput, priceInput } = this.state;

    axios.post('http://localhost:5050/api/product', {img: imgInput, name: nameInput, price: priceInput}).then(res => {
      this.cancelInput();
    }).catch(err => console.log(err));

  }

  updateProduct(){
    const { imgInput, nameInput, priceInput } = this.state;
    axios.put(`http://localhost:5050/api/product/${this.props.match.params.id}`, {img: imgInput, name: nameInput, price: priceInput}).then(res => {
      this.cancelInput();
    }).catch(err => console.log(err));

  }

  componentDidMount(){
    this._isMounted = true;
    if(this.props.match.params.id){
      axios.get(`http://localhost:5050/api/product/${this.props.match.params.id}`).then(res => {
        if(this._isMounted){
          this.setState({
            editing: true,
            imgInput: res.data[0].img,
            nameInput: res.data[0].name,
            priceInput: res.data[0].price,
          })
        }
      })
    }
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params !== this.props.match.params){
        this.setState({
          imgInput: '',
          nameInput: '',
          priceInput: '',
        })
    }
  }

  render(){
    return(
      <div className='dashboard-container'>
      <section className='form-container'>
        <div className='image-preview'>
          <img 
          src={this.state.imgInput || 'https://www.broadwayjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg'} 
          alt={this.state.nameInput}
          width='auto' height='100%'
          />
        </div>
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
          <Link to='/'><button onClick={() => this.cancelInput()}>Cancel</button></Link>
          {!this.state.editing ?
              <Link to='/'><button onClick={() => this.createProduct()}>Add to Inventory</button></Link>
            :
              <Link to='/'><button onClick={() => this.updateProduct()}>Save</button></Link>
          }
        </div>
      </section>
      </div>
    )
  }
}