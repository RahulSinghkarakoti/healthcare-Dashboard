import React from "react";
import { TrendingUp, Droplets ,Microscope, TrendingDown, Activity, TestTube} from "lucide-react";
function Statuscard() {
  return (
    <div className="   grid grid-cols-2 grid-rows-2 w-full gap-2 h-full p-2">
      <div className="bg-white w-full h-full rounded-md p-2 flex  gap-4 items-start">
        <div className="w-1/5 h-full flex items-center justify-center bg-red-100 rounded-md ">
          <Droplets className="w-10 h-10 text-red-600" />
        </div>
        <div>
          <h1 className="font-bold text-black">Blood Status</h1>
          <h1 className="text-red-400 text-xl font-bold">100/70</h1>
          <div className="flex gap-2 text-sm">
          <TrendingUp className="text-green-400" />

            <p>5% Higher than last week</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-full rounded-md p-2 flex  gap-4 items-start">
        <div className="w-1/5 h-full flex items-center justify-center bg-green-100 rounded-md ">
          <Microscope className="w-10 h-10 text-green-600" />
        </div>
        <div>
          <h1 className="font-bold text-black">Glucose Level</h1>
          <h1 className="text-green-400 text-xl font-bold">78–92</h1>
          <div className="flex gap-2 text-sm">
            <TrendingUp className="text-green-400" />
            <p>12% Higher than last week</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-full rounded-md p-2 flex  gap-4 items-start">
        <div className="w-1/5 h-full flex items-center justify-center bg-purple-100 rounded-md ">
          <Activity className="w-10 h-10 text-purple-600" />
        </div>
        <div>
          <h1 className="font-bold text-black">Heart Rate</h1>
          <h1 className="text-purple-400 text-xl font-bold">78 bpm</h1>
          <div className="flex gap-2 text-sm">
            <TrendingDown className="text-red-400" />
            <p>2% Less than last week</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-full rounded-md p-2 flex  gap-4 items-start">
        <div className="w-1/5 h-full flex items-center justify-center bg-pink-100 rounded-md ">
          <TestTube className="w-10 h-10 text-pink-600" />
        </div>
        <div>
          <h1 className="font-bold text-black">Blood Count</h1>
          <h1 className="text-pink-400 text-xl font-bold">9.500/ml</h1>
          <div className="flex gap-2 text-sm">
            <TrendingDown className="text-red-400" />
            <p>7% Less than last week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statuscard;
