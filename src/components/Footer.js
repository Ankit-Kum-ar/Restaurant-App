import chef from "../assets/chef.jpg"
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
export const Footer = () => {
    return (
        <div className=" mt-7 bg-gray-950 p-1 shadow-lg shadow-white">
            <div className="w-full justify-center items-center text-white flex flex-wrap md:mt-16 mt-10 md:gap-11 gap-8">
                <div className="flex flex-row md:mr-14 mr-8">
                    <img src={chef} className="md:w-9 md:h-9 w-5 h-5 md:mt-0 mt-1 rounded-2xl"/>
                    <p className="md:text-3xl text-lg font-semibold md:px-2 px-1">FoodGy</p>
                </div>
                <div className="flex flex-col">
                    <p className="md:font-bold font-semibold md:text-lg text-base md:mb-4 mb-2">Download</p>
                    <p className="md:text-sm text-xs py-1">Window App</p> 
                    <p className="md:text-sm text-xs py-1">Mac App</p>
                    <p className="md:text-sm text-xs py-1">Linux App</p>
                    <p className="md:text-sm text-xs py-1">Dekstop App</p> 

                    <p className="hidden sm:block md:font-bold font-semibold md:text-lg text-base md:mb-4 mb-2 mt-6">Services</p>
                    <p className="hidden sm:block md:text-sm text-xs py-1">Rating and Reviews</p> 
                    <p className="hidden sm:block md:text-sm text-xs py-1">Easy Payment</p>
                    <p className="hidden sm:block md:text-sm text-xs py-1">Order History</p>
                </div>
                <div className="flex flex-col md:mb-[200px]">
                    <p className="md:font-bold font-semibold md:text-lg text-base md:mb-4 mb-2">Company</p>
                    <p className="md:text-sm text-xs py-1">Terms & Conditions</p> 
                    <p className="md:text-sm text-xs py-1">Privacy Policy</p>
                </div>
                <div className="flex flex-col md:ml-0 ml-16">
                    <p className="md:font-bold md:text-lg font-semibold text-base mb-4">Get in touch</p>
                    <div className="flex flex-row gap-3 w-40">
                        <FaInstagram />
                        <FaSquareXTwitter />
                        <FaLinkedin />
                    </div>
                    <div className="sm:flex hidden bg-white px-5 py-4 w-64 h-11 items-center rounded-2xl mt-8 ">
                        <input className="ml-3 border-none focus:outline-none w-full text-black placeholder-black" type="email" placeholder="Email Address" />
                    </div>
                    
                </div>
                <div className="hidden sm:block mt-24">
                    <button className=" bg-gray-600 px-4  p-2 rounded-xl">Subscribe</button>
                </div>

                
            </div>
            <div className="border-t border-white mt-7 h-8 w-full"></div>
            <div className="w-full md:mt-3 mb-4 bg-gray-950 text-white text-center md:p-2">
                <p className="md:text-base text-sm">© 2024 FoodGy. All Rights Reserved</p>
            </div>
        </div>
    )
}