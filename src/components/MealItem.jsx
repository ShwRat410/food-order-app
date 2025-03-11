import React,{use} from 'react'
import {currencyFormatter} from '../util/formatter'
import Button from '../UI/Button'
import {CartContext} from '../store/CartContext'

export default function MealItem({meal}) {

  const cartCtx = use(CartContext)

  function handleAddItem(){
    cartCtx.addItem(meal)
  }

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
                <Button onClick={handleAddItem}>Add to cart</Button>
            </div>        
        </article>
      </li>
  )
}
