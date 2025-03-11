import React,{createContext, useReducer} from 'react'

export const CartContext = createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{}
})

function reducerFn(state,action){
    if(action.type==="ADD_ITEM"){
        const existingCartItemIndex = state.items.findIndex((item)=>{
            console.log(item.id)
            console.log(action.item.id)
            return item.id===action.item.id
        })
        console.log(existingCartItemIndex)
        const updatedItems = [...state.items]
        if(existingCartItemIndex === -1){
// No existing id in cart with same name  
            updatedItems.push({...action.item,quantity:1})
        }
        else{
// id already exists in cart
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity:existingItem.quantity+1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return{...state,items:updatedItems}
    }
    if(action.type==="REMOVE_ITEM"){
        const existingCartItemIndex= state.items.findIndex((item)=>
            item.id===action.id
        )
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedItems = [...state.items] 

        if(existingCartItem.quantity===1){
            updatedItems.splice(existingCartItemIndex,1)
        }
        else{
            const updatedItem = {
                ...existingCartItem,
                quantity:existingCartItem.quantity-1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return{...state,items:updatedItems}
    }
    return state;
}

export function CartContextProvider({children}){

    const[cart, dispatchFn]=useReducer(reducerFn,{items:[]})

    function addItem(item){
        console.log(item)
        dispatchFn({type:"ADD_ITEM",item})
    }

    function removeItem(id){
        dispatchFn({type:"REMOVE_ITEM",id})
    }

    const cartContext={
        items:cart.items,
        addItem,
        removeItem
    }
    console.log(cartContext)

    return(
        <CartContext value={cartContext}>
            {children}
        </CartContext>
    )
}
