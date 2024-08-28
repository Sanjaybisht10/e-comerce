import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";



const Cart = () => {
  const cart = useSelector((state) => state.Cart||[]);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
   setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div>
      {
        cart.length>0 ? (
          <div className="grid grid-cols-2 max-w-6xl p-2 mx-auto space-y-10 space-x-20">
            <div>{cart.map((item) => {
              return <CartItem key={item.id} item={item} />
            })
            }
            </div>
            <div className="p-10">
              <div>
                <div className="text-green-700 font-bold">YOUR CART</div>
                <div className="text-green-700 font-bold text-[50px]">SUMMARY</div>
                <p className="text-black font-semibold ">
                  <span>Total Items:{cart.length}</span>
                </p>
              </div>
              <div className="mt-60">
                <p>Total Amount:${totalAmount}</p>
                <button className="text-white bg-green-500 border-2 border-gray-700 rounded-full font-semibold
              text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white">Checkout Now</button>
              </div>
            </div>
            
          </div>

        ):
        (
          <div>
            <h1>Empty Card</h1>
            <NavLink to="/">
            <button>Shop Now</button>
            </NavLink>

          </div>
        )
      }
    </div>
     
  );
};

export default Cart;
