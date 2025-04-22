import React, {createContext, useState} from 'react'
import all_products from '../assets/Product_Data'

export const CartContext = createContext(null)

const getDefaultCart = ()=>{
  let cart = {}
  for (let index = 0; index < all_products.length+1; index++){
      cart[index] = 0
  }
  return cart;
}

const CartContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems)
  }

  const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const updateCartItemQuantity = (itemId, quantity) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: quantity
    }));
  };
  

  const contextValue = {all_products, cartItems, addToCart, removeFromCart, updateCartItemQuantity}
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;