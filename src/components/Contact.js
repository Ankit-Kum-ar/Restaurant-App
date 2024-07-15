import { useContext } from "react"
import { UserContext } from "../utils/UserContext"

export const Contact = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <div>
            <h1 className="md:text-3xl text-xl font-semibold p-2 m-2 text-center">Contact Us </h1>
            <div className="rounded-lg shadow-xs shadow-slate-50 my-5 border-2 flex  w-5/12 mx-auto left-0 right-0">
                <form className="m-4">
                    <input className="md:mx-3 mx-2 md:mb-9 mb-5 md:mt-5 mt-3 border-none md:p-2 p-1 rounded-lg focus:outline-none w-11/12 text-black placeholder-black md:placeholder:text-base placeholder:text-sm" type="text" placeholder="Username" />
                    <input className="md:mx-3 mx-2 md:mb-9 mb-5 border-none md:p-2 p-1 rounded-lg focus:outline-none w-11/12 text-black placeholder-black md:placeholder:text-base placeholder:text-sm" type="email" placeholder="Email Address" />
                    <textarea className="md:mx-3 mx-2 border-none md:p-2 p-1 rounded-lg focus:outline-none w-11/12 text-black placeholder-black md:placeholder:text-base placeholder:text-sm" type="text" placeholder="Message" />
                    <button className="bg-gray-600 hover:bg-slate-800 md:px-3 md:py-1 p-1 mx-3 rounded-lg md:text-base text-xs mt-5">Submit</button>
                </form>
            </div>
        </div>
    )
}