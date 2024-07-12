import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// Create Restaurent Card Component
const RestaurentCard = (props) => {
    // console.log(props);
    const {name,cloudinaryImageId,locality,avgRating,costForTwo,id} = props.resData.info;
    return (
        <div className="md:m-2 md:p-4 md:w-60 md:mr-14 w-40 mx-10 p-2 py-3 mr-6 justify-center items-center">
            <img className="rounded-xl" src={CDN_URL + cloudinaryImageId}/>
            <div className="restaurent-details">
                <h4 className="py-1 md:font-bold text-lg font-semibold ">{name}</h4>
                <p className="md:text-base text-sm md:pb-0 pb-1">{locality}</p>
                <p className="flex md:text-base text-sm pb-1"><FaStar className="mt-1 mr-2 "/> {avgRating}</p>
                <p>{costForTwo}</p> 
                <Link to={"/restaurent/"+id}><button className="mt-2 bg-gray-600 px-1 rounded-md hover:bg-slate-800 md:text-base text-sm">Order Now</button></Link>
            </div>
        </div>
    )
}

// Higher Order Component
// Input of HOC --> Restaurent Card Componenet
// Output of HOC --> Restaurent Card Component Promoted

export const withPromotedLabel = (RestaurentCard) =>{
    return (props) => {
        return (
            <div>
                <label className="hidden md:block absolute bg-black mt-5 ml-3 p-1 rounded-lg shadow-sm shadow-slate-500">Promoted</label>
                {/* ... => Spread operator that pass all the props that we received */}
                <RestaurentCard {...props}/> 
            </div>
        )
    }
}

export default RestaurentCard;