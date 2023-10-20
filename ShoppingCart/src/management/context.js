import {createContext, useContext, useEffect, useReducer} from "react"
import CartData from "../data/CartData"
import reducer from "./reducer"

const initState={
      cart:CartData,
      total:0,
      amount:0
}
const CartContext = createContext()

export const MyCartContext =()=>{
      return useContext(CartContext)
}

const CartProvider=({children})=>{
      const [state,dispatch] = useReducer(reducer,initState)

      const formatNumber=(num)=> {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }

      useEffect(()=>{
            dispatch({type:"CALCULATE_TOTAL"})
      },[state.cart])
      
      const removeItem=(id)=>{
            dispatch({type:"REMOVE_ITEM",payload:id})
      }

      const toggleQuantity=(id,type)=>{
            // console.log(state.cart)
            dispatch({type:"TOGGLE_QUANTITY",payload:{id,type}})
      }
      
      return(
            <CartContext.Provider value={{...state,removeItem,toggleQuantity,formatNumber}}>
                  {children}
            </CartContext.Provider>
      )
}

export {CartContext,CartProvider}