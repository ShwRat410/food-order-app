import React from 'react'
import Modal from '../UI/Modal'
import { currencyFormatter } from '../util/formatter'
import { CartContext } from '../store/CartContext'
import { UserProgressContext } from '../store/UserProgressContext'
import { use } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

export default function Checkout() {

  const cartCtx = use(CartContext)
  const userProgressContext = use(UserProgressContext)
  const cartTotal = cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price,0)

  function handleClose(){
    userProgressContext.hideCheckout()
  }

  function handleFormSubmit(event){
    event.preventDefault()
    const fd = new FormData(event.target)
    const enteredData = Object.fromEntries(fd.entries())
    console.log(enteredData)
    const response = fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            order:{
                items:cartCtx.items,
                customer:enteredData
            }
        })
        
     })
  }
    // checkout total amount form(name,email,street,postal code, city) close submitorder
  return (
    <Modal open={userProgressContext.progress === 'checkout'}  onClose={handleClose}>
      <form onSubmit={handleFormSubmit}>
        <h2>Checkout</h2>
        <p>Total amount to be paid:{currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" id="name" type="text"></Input>
        <Input label="Email" id="email" type="email"></Input>
        <Input label="Street" id="street" type="text"></Input>
        <div className='control-row'>
            <Input label="Postal Code" id="postal-code" type="number"></Input>
            <Input label="City" id="city" type="text"></Input>
        </div>
        <p className='modal-actions'>
            <Button type="button" onClick={handleClose} textOnly>Close</Button>
            <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  )
}
