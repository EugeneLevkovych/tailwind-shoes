export default function Sidebar({children, isOpen, onClickClose}) {

  return (
    <div className={`fixed left-0 top-0 z-50 w-full h-full transform bg-gray-400 transition duration-300 p-5 ${isOpen ? "translate-x-0" : "translate-x-full" }`}>
        <button 
          onClick={onClickClose} 
          className="absolute right-4 top-4 p-2 font-bold text-black"
          >
            X
        </button>
        {children}
    </div>
  )}