import React from 'react'
import { currencyFormatter } from '../util/formatter'

export default function CartItem({name,quantity,price,addItem,removeItem}) {
  return (
    <li className="cart-item">
        <p>{name} - {quantity} - {currencyFormatter.format(price)}</p>
        <p className="cart-item-actions">
            <button onClick={removeItem}>-</button>
            <span>{quantity}</span>
            <button onClick={addItem}>+</button>
        </p>
    </li>
  )
}
