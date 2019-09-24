import React from 'react'
import Fruit from './Fruit'
import './Containers.css'

const FruitContainer = ({ fruits, changeFruit }) => {
    
    const renderFruits = () => {
        return fruits.map(fruit => {
            return <Fruit fruit={fruit} changeFruit={changeFruit}/>
        })
    }

    return(
        <div className='fruit-container'>
            {fruits ? renderFruits() : null}
        </div>
    )
}

export default FruitContainer