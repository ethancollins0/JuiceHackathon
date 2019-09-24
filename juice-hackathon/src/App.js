import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CardContainer from './components/CardContainer'
import SearchBar from './components/SearchBar'
import './App.css'
import { parse } from 'querystring';

export default class App extends Component {

  state = {
    fruits: [],
    filter: '',
    juice: {protein: 0, 
            fat: 0, 
            carbohydrates: 0, 
            calories: 0,
            sugar: 0,
            calcium: 0,
            potassium: 0,
            vitaminA: 0,
            vitaminC: 0,
            folate: 0},
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

  updateJuice = (name, op) => {
    let juice = this.state.juice
    const fruit = this.state.fruits.find(fruit => {
      return fruit.name == name
    })
    const keys = Object.keys(juice)
    if (op == '-'){
      keys.map(key => {
        juice[key] -= parseFloat(fruit[key].toFixed(2))
        console.log(fruit[key].toFixed(2))
      })
    } else {
      keys.map(key => {
        console.log(juice[key], fruit[key])
        juice[key] += parseFloat(fruit[key].toFixed(2))
        console.log(fruit[key].toFixed(2))
      })
      
    }
    keys.map(key => {
        juice[key] = parseFloat(juice[key].toFixed(2))
    })
    this.setState({ juice })
  }


  render(){
    return (
      <div className="app" >
        <NavBar />
        <SearchBar filter={this.setFilter}/>
        <CardContainer fruits={this.state.filteredFruits} updateJuice={this.updateJuice} juice={this.state.juice}/>
      </div>
    );
  }
}

