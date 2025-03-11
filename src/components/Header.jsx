import Button from '../UI/Button'
import image from '../assets/logo.jpg'
import {use} from 'react'
import {CartContext} from '../store/CartContext'

export default function Header(){
    const cartCtx = use(CartContext)
    const cartValue = cartCtx.items.reduce((totalnumberofitems,item)=>totalnumberofitems+item.quantity,0)
    return(
        <div id="main-header">
            <div id="title">
                <img src={image} alt=''/>
                <h1>FOOD ORDER</h1>
            </div>
            <div>
                <Button textOnly>Cart({cartValue})</Button>
            </div>
        </div> 
        ) 
    }