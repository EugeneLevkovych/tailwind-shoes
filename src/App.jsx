import '@fontsource-variable/nunito';
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from '../constant';
import NewArrivalsSection from './components/NewArrivalsSection';

export default function App() {

  return (
  <div className="animate-fade-in p-10 xl:px-24">
    <Nav />
    <ShoeDetail />
    <NewArrivalsSection items={SHOE_LIST} />
  </div>
  )  
}

 
