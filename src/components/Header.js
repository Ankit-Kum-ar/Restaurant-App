import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

// Create Header Component
const Header = () => {
    // Creating a state variable using useState() hook.
    const [btnValue, setBtnValue] = useState("Login");
    const logValue = () => {
        if (btnValue === "Login") {
            setBtnValue("Logout");
        } else {
            setBtnValue("Login");
        }
    }
    const [isVisible, setIsVisible] = useState(false);
    const showMenu = () => {
        setIsVisible(!isVisible);
    }

    const cardItems = useSelector((state) => state.cart.items);
    console.log(cardItems);

    return (
        <div className="flex justify-between border border-solid border-orange-200 mb-5 mt-1 shadow-2xl">
            <img className="w-24 h-14 mx-4 rounded-3xl md:w-40 md:h-20 md:ml-5 md:rounded-full" src={LOGO_URL} />
            <div className="">
                <ul className="hidden md:flex p-4 mt-3">
                    <li className="mr-9 ">
                         <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="mr-9">
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li className="mr-9">
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                    <li className="mr-9">
                        <Link to="/grocery" className="link">Grocery</Link>
                    </li>
                    <li className="mr-9">
                        <Link to="/cart">Cart - {cardItems.length}</Link>
                    </li>
                    <button className="mr-9" onClick={logValue}>{btnValue}</button>
                </ul>
                <button className="md:hidden p-4 mt-2" onClick={showMenu}>
                        <IoMdMenu />
                        {
                            isVisible && (
                                <div className="fixed bg-[#313131] inset-0">
                                     <div className="flex justify-between border border-solid border-orange-200 mb-5 mt-1 shadow-2xl">
                                        <img className="w-24 h-14 mx-4 rounded-3xl" src={LOGO_URL} />
                                        <button className=" p-4 mt-2"><RxCross2 /></button>
                                    </div>
                                    <div className="flex flex-col mt-3 gap-2">
                                        <Link to="/" className="link">
                                            <div className=" font-semibold text-left mx-4 p-4 hover:rounded-md hover:border-[1px]">
                                                Home
                                            </div>
                                        </Link>
                                        <Link to="/about" className="link">
                                            <div className=" font-semibold text-left mx-4 p-4 hover:rounded-md hover:border-[1px]">
                                                About
                                            </div>
                                        </Link>
                                        <Link to="/contact" className="link">
                                            <div className=" font-semibold text-left mx-4 p-4 hover:rounded-md hover:border-[1px]">
                                                Contact
                                            </div>
                                        </Link>
                                        <Link to="/cart">
                                            <div className=" font-semibold text-left mx-4 p-4 hover:rounded-md hover:border-[1px]">
                                                Cart - {cardItems.length}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        
                        }
                </button>

                {/*  */}
            </div>
        </div>
    )
}
export default Header;