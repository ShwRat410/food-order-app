import React,{use} from 'react'
import Modal from '../UI/Modal'
import { CartContext } from '../store/CartContext'
import {currencyFormatter} from '../util/formatter'
import { UserProgressContext } from '../store/UserProgressContext'
import Button from '../UI/Button'
import CartItem from './CartItem'

export default function Cart() {

  const cartCtx = use(CartContext)
  const userProgressContext = use(UserProgressContext)
  const cartTotal = cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0)
  console.log("I M IN CART.JSX")
  console.log(cartCtx.items)

  
  function handleCloseCart(){
    userProgressContext.hideCart()
  }

  function handleCheckout(){
    userProgressContext.showCheckout()
  }

  return (
// name +qualtity- item <button> back and checkout
    <Modal className="cart" open={userProgressContext.progress === 'cart'}>
        <h2>YOUR CART</h2>
        <ul>
            {cartCtx.items.map((item)=>{
                return <CartItem 
                    key={item.id}
                    name={item.name} 
                    quantity={item.quantity} 
                    price={item.price}
                    addItem={()=>cartCtx.addItem(item)}
                    removeItem={()=>cartCtx.removeItem(item.id)}
                    ></CartItem>
            })
            }
        </ul>
        <p className="cart-total">Total - {currencyFormatter.format(cartTotal)}</p>
        <p className='modal-actions'>
            <Button onClick={handleCloseCart} textOnly>Close</Button>
            {cartCtx.items.length>0 && <Button onClick={handleCheckout}>Checkout</Button>}
        </p>
    </Modal>  )
}
