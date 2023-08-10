import { useState } from "react";

export default function NavBar() {
    let [show, setShow] = useState(true)

    const name = 'My Tinerary';
    const home = 'Home';
    const cities = 'Cities';
    const login = 'Login';

    return (
        <header className="flex justify-between item-center ">

            <div className=" flex justify-between items-center font-sans text-3xl not-italic font-bold leading-normal gap-3 ">
                <img className="pl-3" width="70" height="70" src="/planning.png" alt="" />
                <div>
                    <p className="max-lg:hidden ">{`${name}`}</p>
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[60px] h-[60px] pr-3 bg-white p-[5px] rounded-xl cursor-pointer  xl:hidden"
                onClick={()=>setShow(!show)}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>

            {show ? (
                <nav className="flex gap-3 justify-center items-center f max-xl:hidden ] ">
                    <button className=" font-sans text-2xl not-italic font-bold leading-normal ">{`${home}`}</button>
                    <button className=" font-sans text-2xl not-italic font-bold leading-normal ">{`${cities}`}</button>
                    <button className=" flex text-2xl py-4 px-8  items-center leading-normal font-bold text-white bg-indigo-700 hover:bg-indigo-500 rounded-[10px] gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" >
                            <path d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z" fill="white" />
                            <path d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z" fill="white" />
                        </svg>{`${login}`}</button>
                </nav>) : (null)}


        </header >
    )
}
