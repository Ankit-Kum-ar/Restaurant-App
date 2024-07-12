import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import {useDispatch} from "react-redux";

export const ItemList = ({items}) => {
    console.log(items);
    const dispatch = useDispatch();
    const handleButtonClick = (e, arg) => {
        e.stopPropagation();
        // Add any additional button click logic here

        // AddItem slice action has dispatch
        // console.log(arg.card.info.name);
        dispatch(addItems(arg))
    };
    const handleButtonClickWrapper = (arg) => (e) => {
        handleButtonClick(e, arg);
      };
    return (
        <div className="justify-center items-center" >
            <div className="flex flex-wrap ">
                {items.map((item) => (
                    <div key={item.card.info.id} className="md:m-2 md:p-2 m-1 p-1 border-gray-400 border-b-[1px] flex flex-row-reverse"> 
                        <div className="md:w-3/12 w-4/12 ml-4 mb-2">
                            <div className="md:absolute justify-center items-center">
                                <button onClick={handleButtonClickWrapper(item)} className="md:font-bold font-semibold text-center md:w-24 w-16 font-sans  bg-white text-green-700 md:p-1 md:mx-9 mx-4 rounded-md md:text-base text-sm "> ADD</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="" />
                        </div>
                        <div className="w-9/12">
                          <span className="font-semibold">{item.card.info.name}</span> 
                          <br/>  
                          <span className="text-xs">₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100} </span>
                            
                          <p className="md:text-sm text-xs mt-2 mb-3">{item.card.info.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}