import React, { Component } from 'react'
import FruitContainer from './FruitContainer'
import DetailCard from './DetailCard'
import Juice from './Juice'
import './Containers.css'
import './Fruit.css'

export default class CardContainer extends Component {
    state = {
        selectedFruit: {}
    }

    changeSelectedFruit = (name) => {
        this.setState({selectedFruit: (this.props.fruits.find(fruit => {
            return fruit.name == name
        }))})
    }


    render(){
        return (
            <div className='container'>
                <FruitContainer fruits={this.props.fruits} changeFruit={this.changeSelectedFruit} updateJuice={this.props.updateJuice} />
                <div className='detail-card'>
                    {this.props.juice ? <Juice juice={this.props.juice} /> : null}
                    {this.state.selectedFruit ? <DetailCard fruit={this.state.selectedFruit}/> : null }
                </div>
            </div>
        )
    }
}

