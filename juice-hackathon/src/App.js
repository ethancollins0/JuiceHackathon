import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CardContainer from './components/CardContainer'
import SearchBar from './components/SearchBar'
import './App.css'

export default class App extends Component {

  state = {
    fruits: [],
    filter: '',
    juice: [],
    filteredFruits: [],
  }

  setFilter = (filter) => {
    this.setState({
      filter: filter
    }, () => {
      this.filterFruits()
    })
  }

  
  
  filterFruits = () => {
    let filteredFruits = this.state.fruits.filter(fruit => {
      return fruit.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    console.log(this.state.filter)
    this.setState({ filteredFruits }, () => {
      console.log(this.state.filteredFruits)
    })
  }

  componentDidMount(){
    this.fetchFruit()
  }

  fetchFruit = () => {
    fetch('http://localhost:3000/ingredients')
      .then(resp => resp.json())
      .then(fruits => this.setState({ fruits }, () => this.filterFruits()))
  }

  updateJuice = (fruit, op) => {
    let juice = this.state.juice
    let keys = Object.keys(juice)
    if (op == '-'){
      keys.map(key => {
        juice[key] -= fruit[key]
      })
    } else {
      keys.map(key => {
        juice[key] += fruit[key]
      })
    }
    
  }


  render(){
    return (
      <div className="app" >
        <NavBar />
        <SearchBar filter={this.setFilter}/>
        <CardContainer fruits={this.state.filteredFruits} />
      </div>
    );
  }
}

