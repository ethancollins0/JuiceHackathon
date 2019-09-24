import React, { Component } from 'react'
import './Fruit.css'

export default class Fruit extends Component {


    state = {
        count: 0
    }

    handleClick = (event) => {
            event.target.textContent == '-'
                ? this.checkState(event.target.name)
                : this.handleAdd(event.target.name)
    }

    checkState = (name) => {
        if (this.state.count > 0){
            this.setState({ count: this.state.count - 1 })
            this.props.updateJuice(name, '-')
        }
    }

    handleAdd = (name) => {
        this.props.updateJuice(name, '+')
        this.setState({count: this.state.count + 1})
    }

    render(){
        const fruit = this.props.fruit
        return (
            <div className='card'>
                <section>
                    <img src={fruit.img} alt={fruit.name} onClick={() => this.props.changeFruit(fruit.name)}></img>
                    <h1>{fruit.name}</h1>
                </section>
                <section>
                    <button onClick={this.handleClick} name={fruit.name}>-</button>
                    <input type='text' className='count' value={`${this.state.count * 100}g`} />
                    <button onClick={this.handleClick} name={fruit.name}>+</button>
                </section>
            </div>
        )
    }
    
}