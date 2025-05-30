import '@fontsource-variable/nunito';
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from '../constant';
import NewArrivalsSection from './components/NewArrivalsSection';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

export default function App() {

const [isSidebarOpen, setIsSidebarOpen ] = useState(false);

  return (
  <div className="animate-fade-in p-10 xl:px-24">
    <Nav onClickShoppingButton={()=>setIsSidebarOpen(true)} />
    <ShoeDetail />
    <NewArrivalsSection items={SHOE_LIST} />
    <Sidebar
      isOpen={isSidebarOpen}
      onClickClose={()=>setIsSidebarOpen(false)}>
        Hi
      </Sidebar>
  </div>
  )  
}

 
