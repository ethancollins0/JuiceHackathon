import React from 'react'
import './Fruit.css'

const DetailCard = ({ juice }) => {
    const {protein, 
           fat, 
           carbohydrates, 
           calories, 
           sugar, 
           calcium, 
           potassium, 
           vitaminA, 
           vitaminC, 
           folate
        } = juice


    return (
        <div className='card'>
            <h1>Your Concoction</h1>
            <p>Protein: {protein}g</p>
            <p>Fat: {fat}g</p>
            <p>Carbs: {carbohydrates}g</p>
            <p>Calories: {calories} cals</p>
            <p>Calcium: {calcium}mg</p>
            <p>Sugar: {sugar}</p>
            <p>Potassium: {potassium}mg</p>
            <p>vitaminA: {vitaminA}IU</p>
            <p>vitaminC: {vitaminC}mg</p>
            <p>folate: {folate}mg</p>
        </div>
    )
}

export default DetailCard