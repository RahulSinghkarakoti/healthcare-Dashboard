import React from "react";
import {CirclePlus} from "lucide-react"
import { Link } from "react-router-dom";
function Navbar() {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // // Toggle modal visibility
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <div className="bg-transparent p-2 h-16  text-black  flex justify-between items-center ">
      <div className="text-3xl font-bold text-black">Doc.</div>
      <div className="flex gap-4 justify-between items-center">
        <Link
        to="/add"

         className="animate-pulse flex justify-between items-center gap-2 text-white font-semibold bg-blue-600 p-2 rounded-md">
        Add report 
        <CirclePlus/>
        </Link>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bell-dot"
          >
            <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            <circle cx="18" cy="8" r="3" />
          </svg>
        </button>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
