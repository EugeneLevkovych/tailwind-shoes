import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services","Pricing", "Contact"]; 

export default function Nav() {
const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

 return (
 <nav className="flex flex-wrap justify-between">
   <a href="#">
     <NikeLogo className="h-20 w-20" />
   </a>
   <button onClick={()=>setIsMobileMenuShown(!isMobileMenuShown)} className="lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
    <RxHamburgerMenu size={25} />
   </button>
   <div className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}>
    <ul className="lg:space-x-8  flex flex-col rounded-lg border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent p-4 text-lg lg:flex-row">
        {ROUTES.map((route, i) => {
           return (<li className={`px-3 py-2 cursor-pointer rounded ${
            i===0
            ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" 
            : "hover:bg-gray-100"
            }`} 
            key={route} 
            >
              <a>{route}</a>
              </li>
              );
            })}
    </ul>
   </div>
   <div className="fixed bottom-4 left-4 lg:static">
   <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
   <TbShoppingBag />
   </div>
   </div>
 </nav>
 )
}