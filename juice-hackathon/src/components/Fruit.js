import React, { Component } from 'react'
import './Fruit.css'

export default class Fruit extends Component {


    state = {
        count: 0
    }

    handleClick = (event) => {
            event.target.textContent == '-'
                ? this.checkState()
                : this.setState({ count: this.state.count + 1 })
    }

    checkState = () => {
        if (this.state.count > 0){
            this.setState({ count: this.state.count - 1 })
        }
    }

    render(){
        const fruit = this.props.fruit
        return (
            <div className='card' onClick={() => this.props.changeFruit(fruit.name)}>
                <section>
                    <img src={fruit.img} alt={fruit.name}></img>
                    <h1>{fruit.name}</h1>
                </section>
                <section>
                    <button onClick={this.handleClick}>-</button>
                    <input type='text' className='count' value={this.state.count} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>+</button>
                </section>
            </div>
        )
    }
    
}