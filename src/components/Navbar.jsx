import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state)=>state.Cart);
  return (
    <div>
      <nav className="flex justify-between items-center max-w-4xl mx-auto h-15">
        <NavLink to ="/">
          <div className="ml-5">
            <img src="https://cdn-icons-png.flaticon.com/128/3649/3649775.png" className="h-14"/>
          </div>
        </NavLink>
        
          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          
        </NavLink>
        <NavLink to="/Cart">
         <div className="relative">
          <FaShoppingCart className="text-2xl"/>
          {
            cart.length>0 &&
             <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4
             flex justify-between items-center animate-bounce rounded-full text-white"
            >{cart.length}</span>
          }
         </div>
          
        </NavLink>
        </div>
       


      </nav>

    </div>
    
  );
};

export default Navbar;
