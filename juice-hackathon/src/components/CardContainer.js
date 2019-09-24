import React, { Component } from 'react'
import FruitContainer from './FruitContainer'
import DetailCard from './DetailCard'
import './Containers.css'
import './Fruit.css'

export default class CardContainer extends Component {
    state = {
        selectedFruit: {name: 'default fruit'}
    }

    changeSelectedFruit = (name) => {
        this.setState({selectedFruit: (this.props.fruits.find(fruit => {
            return fruit.name == name
        }))})
    }


    render(){
        return (
            <div className='container'>
                <FruitContainer fruits={this.props.fruits} changeFruit={this.changeSelectedFruit} />
                <div className='detail-card'>
                    <DetailCard fruit={this.state.selectedFruit} />
                </div>
            </div>
        )
    }
}

