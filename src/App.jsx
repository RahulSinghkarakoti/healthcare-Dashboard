import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
 
      <div className="">
        <Navbar />
        <div className="flex w-full h-[92vh] space-x-2 ">
          <Sidebar />
           <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
