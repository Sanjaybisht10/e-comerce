import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed Successfully");
  }
  return (
    <div>
      <div className="flex flex-row gap-10 p-4 mt-5 ml-5  items-center">
        <div className="h-[180px]">
          <img className="w-full h-full" src={item.image}/>
       </div>
       <div>
          <h1 className='font-semibold text-lg text-left truncate w-40 mt-1 text-gray-700'>{item.title}</h1>
          <h1 className="text-black w-60 text-[10px] font-normal text-left">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</h1>
        <div className="flex flex-row gap-24 mt-5">
          <p className="text-green-700 font-semibold">${item.price}</p>
          <div  onClick={removeFromCart}>
              <FcDeleteDatabase className="w-7 h-7 rounded-full 
                       bg-red-400"/>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
};

export default CartItem;
