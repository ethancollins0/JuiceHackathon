import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        input: ''
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value }, () => {
            this.props.filter(this.state.input)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.filter(this.state.input)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label></label>
                <input type='text' name='input' placeholder="Search" value={this.state.input} onChange={this.handleChange} />
            </form>
        )
    }



}