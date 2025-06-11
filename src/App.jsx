import '@fontsource-variable/nunito';
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from '../constant';
import NewArrivalsSection from './components/NewArrivalsSection';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Cart from './components/Cart';
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect } from 'react';

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  }
})

export default function App() {

useEffect(()=>{
  const isDarkMode = localStorage.getItem("isDarkMode");
  if(isDarkMode==="true"){
    window.document.documentElement.classList.add("dark");
  }
},[]);  

const toggleDarkMode = () => {
  window.document.documentElement.classList.toggle("dark");
  
  localStorage.setItem("isDarkMode", window.document.documentElement.classList.contains("dark"));
 
};

const [isSidebarOpen, setIsSidebarOpen ] = useState(false);

  return (
  <div className="animate-fade-in p-10 xl:px-24 dark:bg-night">
    <Nav onClickShoppingButton={()=>setIsSidebarOpen(true)} />
    <ShoeDetail />
    <NewArrivalsSection items={SHOE_LIST} />
    <Sidebar
      isOpen={isSidebarOpen}
      onClickClose={()=>setIsSidebarOpen(false)}
    >
    <Cart cartItems={FAKE_CART_ITEMS} />
    </Sidebar>
    <div className='fixed bottom-4 right-4 '>
      <button onClick={toggleDarkMode} className='bg-night-50 rounded-full px-4 py-2 text-white dark:bg-white dark:text-night shadow-lg'>
        <BiSun className='hidden dark:block' />
        <BiMoon className='dark:hidden' />
      </button>
    </div>
  </div>
  )  
}

 
