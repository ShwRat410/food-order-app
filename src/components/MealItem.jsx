import React from 'react'
import {currencyFormatter} from '../util/formatter'

export default function MealItem({meal}) {
  return (
      <li key={meal.id}>
        <article className="meal-item">
            <img src={`http://localhost:3000/${meal.image}`} alt="image"/>
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <div className='meal-item-actions'>
                <button>Add to cart</button>
            </div>        
        </article>
      </li>
  )
}
