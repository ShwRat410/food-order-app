import React,{use} from 'react'
import Modal from '../UI/Modal'
import { CartContext } from '../store/CartContext'
import {currencyFormatter} from '../util/formatter'
import { UserProgressContext } from '../store/UserProgressContext'
import Button from '../UI/Button'

export default function Cart() {

  const cartCtx = use(CartContext)
  const userProgressContext = use(UserProgressContext)
  const cartTotal = cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0)
  console.log("I M IN CART.JSX")
  console.log(userProgressContext.progress)

  return (
// name +qualtity- item <button> back and checkout
    <Modal className="cart" open={userProgressContext.progress === 'cart'}>
        <h2>YOUR CART</h2>
        <ul>
            {cartCtx.items.map((item)=>{
                <li key={item.id}>{item.name} - {item.quantity}</li>
            })
            }
        </ul>
        <p>Total - {currencyFormatter.format(cartTotal)}</p>
        <p className='modal-actions'>
            <Button textOnly>Close</Button>
            <Button>Checkout</Button>
        </p>
    </Modal>
  )
}
