import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const Product = ({post}) => {
 const cart= useSelector((state)=>state.Cart||[]);
 const dispatch = useDispatch();
//  console.log(cart);
//  console.log(post.id);
 const addToCart=()=>{
   dispatch (add(post));
   toast.success("Item Added to cart")
 }
 const removeFromCart=()=>{
  dispatch (remove(post.id));
  toast.success("Item Removed from cart")
 }
  return(
    <div className='flex flex-col items-center justify-between hover:scale-110
    transition-duration-300 ease-in shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]
    gap-3 p-4 mt-10 ml-5 rounded-xl'>
      <div>
        <p className='font-semibold text-lg text-left truncate w-40 mt-1 text-gray-700'>{post.title}</p>
      </div>
      <div>
        <p className=" w-40 text-[10px] font-normal text-left">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>
      <div className="h-[120px]">
        <img src={post.image} className='w-full h-full'/>
      </div>
      <div className="flex justify-between gap-10 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        {
          cart.some((p) => p.id === post.id) ?
            (
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white" 
              onClick={removeFromCart}>
                Remove Item
              </button>
            ) : (
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white" onClick={addToCart}>Add to Cart</button>
            )
        }
      </div>
      
    </div>
  );
};

export default Product;
