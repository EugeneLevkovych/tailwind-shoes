import '@fontsource-variable/nunito';
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from '../constant';
import NewArrivalsSection from './components/NewArrivalsSection';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { CardItem } from './components/CardItem';

export default function App() {

const [isSidebarOpen, setIsSidebarOpen ] = useState(false);

  return (
  <div className="animate-fade-in p-10 xl:px-24">
    <Nav onClickShoppingButton={()=>setIsSidebarOpen(true)} />
    <ShoeDetail />
    <NewArrivalsSection items={SHOE_LIST} />
    <Sidebar
      isOpen={isSidebarOpen}
      onClickClose={()=>setIsSidebarOpen(false)}
    >
      <h2 className="mb-10 text-2xl font-bold">Card</h2>
      <CardItem item={SHOE_LIST[0]} />
      <CardItem item={SHOE_LIST[1]} />
      <CardItem item={SHOE_LIST[2]} />
    </Sidebar>
  </div>
  )  
}

 
