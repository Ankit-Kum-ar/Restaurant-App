
import { IoIosArrowDown } from "react-icons/io";
import { ItemList } from "./ItemList";
import { useState } from "react";
export const RestaurentCategory = ({data, showItems , setShowIndex}) => {
    // const [showItems, setShowItems]   = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            {/* Accordion */}
            <div className="md:mr-72 rounded-2xl md:ml-0 ml-6 mr-6 shadow-lg bg-zinc-800 shadow-gray-800 mb-8 border-2 justify-center items-center border-white md:p-5 p-3"  onClick={handleClick}>
                <span className="flex md:text-lg font-semibold mb-2 cursor-pointer">{data.title} ({data.itemCards.length})
                    <p className=" mt-[6px] ml-auto"><IoIosArrowDown /></p>
                </span>
                {showItems && <ItemList className="" items={data?.itemCards}/>}              
            </div>
            
        </div>
    )
}