import chef from "../assets/chef.jpg"
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
export const Footer = () => {
    return (
        <div className="mt-7 bg-gray-950 p-1 shadow-lg shadow-white">
            <div className="w-full justify-center items-center text-white flex flex-wrap mt-16 gap-11">
                <div className="flex flex-row mr-14 ">
                    <img src={chef} className="w-9 h-9 rounded-2xl"/>
                    <p className="text-3xl font-semibold px-2">FoodGy</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-lg mb-4">Download</p>
                    <p className="text-sm py-1">Window App</p> 
                    <p className="text-sm py-1">Mac App</p>
                    <p className="text-sm py-1">Linux App</p>
                    <p className="text-sm py-1">Dekstop App</p> 

                    <p className="font-bold text-lg my-4">Services</p>
                    <p className="text-sm py-1">Rating and Reviews</p> 
                    <p className="text-sm py-1">Easy Payment</p>
                    <p className="text-sm py-1">Order History</p>
                </div>
                <div className="flex flex-col mb-[200px]">
                    <p className="font-bold text-lg mb-4">Company</p>
                    <p className="text-sm py-1">Terms & Conditions</p> 
                    <p className="text-sm py-1">Privacy Policy</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-lg mb-4">Get in touch</p>
                    <div className="flex flex-row gap-3 w-40">
                        <FaInstagram />
                        <FaSquareXTwitter />
                        <FaLinkedin />
                    </div>
                    <div className="flex bg-white px-5 py-4 w-64 h-11 items-center rounded-2xl mt-8 ">
                        <input className="ml-3 border-none focus:outline-none w-full text-black placeholder-black" type="email" placeholder="Email Address" />
                    </div>
                    
                </div>
                <div className="mt-24">
                    <button className=" bg-gray-600 px-4  p-2 rounded-xl">Subscribe</button>
                </div>

                
            </div>
            <div className="border-t border-white mt-7 h-8 w-full"></div>
            <div className="w-full mt-3 mb-4 bg-gray-950 text-white text-center p-2">
                <p>© 2024 FoodGy. All Rights Reserved</p>
            </div>
        </div>
    )
}