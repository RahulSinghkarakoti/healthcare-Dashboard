import React from "react";
import File from "../assets/file.png";
import Statuscard from "./Statuscard";
import Heart from "../assets/Heart.png";

function Main() {
  return (
    
    <div className="bg-white w-full rounded-3xl p-4 mb-2 ml-6 grid grid-rows-2 gap-4">
      <div className="  flex  gap-4">
        <div className="  flex flex-col gap-2 w-[40%] rounded-xl">
          <h1 className="text-2xl font-bold">Diagnosis History</h1>
          <div className="w-full rounded-xl h-full p-2  ">
            <img src={Heart} className="" alt="" />
          </div>
        </div>

        <div className="  flex flex-col gap-2 w-full ">
          <h1 className="text-2xl font-bold">Your Status</h1>
          <div className="bg-[#f2f5fa] w-full rounded-xl h-full p-2 ">
            <Statuscard />
          </div>
        </div>
      </div>
      <div className="  flex flex-row-reverse gap-4">
        <div className="bg-[#f2f5fa]  overflow-y-scroll w-[65%]  rounded-xl p-4">
          <nav className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Documents</h1>
              <p className="text-sm font-semibold text-gray-600">
                18-19 November
              </p>
            </div>
            <button className="bg-white text-blue-500 text-sm font-semibold rounded-md px-2 py-2">
              view all
            </button>
          </nav>
          <div className=" p-2 space-y-2 ">
            <div className=" flex gap-2 justify-between items-center ">
              <div className="flex">
                <img src={File} className="w-10 h-10" alt="" />
                <div className="flex flex-col">
                  <p>BloodReport.pdf</p>
                  <p className="text-sm text-gray-400">2MB</p>
                </div>
              </div>
              <button className=" ">
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </div>
            <div className=" flex gap-2 justify-between items-center ">
              <div className="flex">
                <img src={File} className="w-10 h-10" alt="" />
                <div className="flex flex-col">
                  <p>ECG Report.pdf</p>
                  <p className="text-sm text-gray-400">2MB</p>
                </div>
              </div>
              <button className=" ">
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </div>
            <div className=" flex gap-2 justify-between items-center ">
              <div className="flex">
                <img src={File} className="w-10 h-10" alt="" />
                <div className="flex flex-col">
                  <p>Glucose Report.pdf</p>
                  <p className="text-sm text-gray-400">2MB</p>
                </div>
              </div>
              <button className=" ">
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </div>
            <div className=" flex gap-2 justify-between items-center ">
              <div className="flex">
                <img src={File} className="w-10 h-10" alt="" />
                <div className="flex flex-col">
                  <p>Blood Count Report.pdf</p>
                  <p className="text-sm text-gray-400">2MB</p>
                </div>
              </div>
              <button className=" ">
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
                  class="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#f2f5fa] w-full h-full rounded-xl p-2 relative overflow-hidden">
          <div className="  monitor     rounded-md mx-auto">
            {/* SVG with animation */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 400"
              className="relative transition-all ease-in-out duration-500 w-full h-auto"
              preserveAspectRatio="none"
            >
              <polyline
                className="ekg"
                points="486.6,113.8 328.2,113.8 310.3,132.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6 
							213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113"
              />
            </svg>
          </div>

          <div className="absolute top-1 left-1 w-full flex justify-between items-center px-2 ">
            <div>
              <h1 className="text-black font-bold  text-xl">Heart Rate</h1>
              <p className="text-sm text-gray-400">17-18 November 2024</p>
            </div>
            <div className="flex justify-between items-center gap-1 bg-white p-2 rounded-xl  font-semibold">
              <p className="text-red-500 text-sm">78 Bpm</p>
              <p className="text-sm text-gray-400">Average</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
