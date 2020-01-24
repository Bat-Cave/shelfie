import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      productList: [],
      selected: null
    }
    

    this.getSelected = this.getSelected.bind(this);
  }

  componentDidMount(){
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

  getSelected(id){
    this.setState({selected: id})
  }

  render(){
    return (
      <div>
        <Header />
        <Dashboard 
          productList={this.state.productList}
          getProductsFn={this.getProducts}
          getSelectedFn={this.getSelected}
          selected={this.state.selected}
        />
      </div>
    );
  }
}
