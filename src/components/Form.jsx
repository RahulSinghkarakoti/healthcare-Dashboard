import React from "react";
import File from "../assets/file.png";
import Statuscard from "./Statuscard";
import Heart from "../assets/Heart.png";
import { Upload } from "lucide-react";
function Form() {
  return (
    <div className=" w-full h-full  flex items-center justify-center">
      <div className="bg-white w-1/3 h-5/6 p-4 rounded-xl">
        <div className="  flex flex-col gap-3 w-full h-1/2 rounded-xl  ">
          <div>
            <h1 className="text-2xl font-bold">Upload and attach files</h1>
            <h1 className="text-md text-gray-500">Upload your report here </h1>
          </div>
          <div className="w-full rounded-xl h-2/3 p-2 border-2 border-black border-dashed flex flex-col items-center justify-center   ">
            <Upload className="w-1/3 h-1/3 " />
            <p>Drag & Drop File Here</p>
            <p>or</p>
            <button className="border-2 border-gray-400 p-2 rounded-md">
              Browse File
            </button>
          </div>
        </div>
        <div className=" h-1/2 rounded-md p-2">
          <form action="" className=" space-y-2">
            <div className="flex flex-col gap-2 ">
              <label
                className="text-black font-semibold text-xl p-0"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-slate-100 h-8 text-xl p-1 rounded-md "
              />
            </div>
            <div className="">
              <label
                className="flex flex-col gap-2  text-black font-semibold text-xl p-0"
                htmlFor="age"
              >
                Age:
                <select className="bg-slate-100 h-8 rounded-md">
                  <option value="new">0-12 </option>
                  <option value="young">13-20</option>
                  <option value="adult">21-35</option>
                  <option value="old">36-80+</option>
                </select>
              </label>
            </div>
            <div className="flex items-center justify-center h-full p-4">

            <button className="p-2 hover:bg-blue-500 bg-blue-400 rounded-md font-semibold  text-white text-xl">
                Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
