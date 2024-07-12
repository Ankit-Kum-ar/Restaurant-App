import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import cycle from "../assets/Bcyle.jpeg";
import { RestaurentCategory } from "./RestaurentCategory";

export const RestaurentMenu = () => {
    const {resId} = useParams();
    const [resInfo, categories] = useRestaurentMenu(resId); // Work through Custom Hook.

    const [showIndex, setShowIndex] = useState(null);
    const handleAccordionClick = (index) => {
        if (showIndex === index) {
          setShowIndex(null); // Collapse if the same index is clicked
        } else {
          setShowIndex(index); // Open the new index
        }
      };

    // For initial values of resInfo
    if(resInfo === null) return <Shimmer/>

    // De-structuring 
    const {name,avgRating,cuisines,totalRatingsString,costForTwoMessage,id, areaName} = resInfo;
    const {slaString} = resInfo?.sla;
    const {message} = resInfo?.feeDetails;

    return ( 
        <div className=" md:ml-56 mt-14 " id={id}>  
            <h1 className="md:mr-72 md:font-bold md:text-2xl mb-7 font-semibold text-xl text-center">{name}</h1>
            <div className="border-2 md:mr-72 md:ml-0 rounded-2xl shadow-2xl bg-zinc-900 shadow-gray-800 md:p-4 p-3 mr-12 ml-12 mb-16">
                <p className="md:font-bold font-semibold pb-1">⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}</p>
                <p className="ml-2 md:text-sm text-xs  text-yellow-300 pb-2 "> {cuisines.join(", ")} </p>
                <div className="flex mb-3">
                    <GoDotFill className="mt-1"/>
                    <p className="font-semibold md:text-base text-sm md:mr-2 mr-1">&nbsp;&nbsp;Outlet </p> 
                    <p className="md:text-base text-sm">&nbsp;&nbsp;{areaName}</p>
                </div>        
                <div className="flex">
                    <GoDotFill className="mt-1"/>
                    <p className="md:text-base text-sm ml-2">{slaString}</p>
                </div>
                <div className="mt-5 flex" >
                    <img className="md:w-6 md:h-6 md:mr-3 mr-2 rounded-lg w-5 h-5" src={cycle}/>
                    <p className="md:text-base text-sm">{message}</p>    
                </div>                
            </div>
            {/* categories accordions */}
            {categories.map((category, index) => (
                <RestaurentCategory
                 key={category?.card?.card?.title}
                  data={category?.card?.card} 
                  showItems={index === showIndex ? true : false}
                    setShowIndex={() => handleAccordionClick(index)}
                />
            ))}
        </div>
    );
}