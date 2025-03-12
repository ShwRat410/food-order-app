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
    // checkout total amount form(name,email,street,postal code, city) close submitorder
  return (
    <Modal open={userProgressContext.progress === 'checkout'}>
      <form>
        <h2>Checkout</h2>
        <p>Total amount to be paid:{currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" id="name" type="text"></Input>
        <Input label="Email" id="email" type="email"></Input>
        <Input label="Street" id="street" type="text"></Input>
        <div className='control-row'>
            <Input label="Postal Code" id="postal" type="number"></Input>
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
