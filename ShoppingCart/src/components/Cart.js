import { MyCartContext } from "../management/context"
import CartItem from "./CartItem"
const Cart =()=>{
      const {cart,total,formatNumber} = MyCartContext()
      if(cart.length === 0){
            return(
                  <div className="shopping-cart">
                      <h1 className="empty">No Product</h1>  
                  </div>
            )
      }else{
            return(
                  <div className="shopping-cart">
                        <div className="title">Product in Cart</div>
                        {cart.map((data)=>{
                              return <CartItem key={data.id} {...data}/>
                        })}
                        <div className="footer">Total Price {formatNumber(total)} Baht</div>
                  </div>
            )
      }
}
export default Cart