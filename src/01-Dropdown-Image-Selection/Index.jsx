import React, { useState } from "react";
import { Image, ChevronUp, ChevronDown } from "lucide-react";
const Index = () => {
  const [selectedImg, setSelctedImg] = useState(false);
  const [isArrUp, setIsArrUp] = useState(false);

  function toggleArr() {
    setIsArrUp(!isArrUp);
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div>
        <div className="w-[22rem] h-20 bg-white -mt-40 flex items-center justify-between px-2">
          {selectedImg ? (
            <img
              className="w-16 cursor-pointer"
              src="../src/assets/images/profile-image1.png"
              alt="selected image"
              title="selected image"
            />
          ) : (
            <>
              <Image className="text-slate-800 " size={50} />
              <h3 className="-ml-20 text-xl">No Image Choosen</h3>
            </>
          )}
          {isArrUp ? (
            <ChevronUp
              className="cursor-pointer hover:bg-slate-300 rounded-full"
              onClick={toggleArr}
            />
          ) : (
            <ChevronDown
              className="cursor-pointer hover:bg-slate-300 rounded-full"
              onClick={toggleArr}
            />
          )}
          {/* {isArrUp && console.log("running..")} */}
        </div>
        {isArrUp && <div className="w-[22rem] min-h-32 bg-red-500 flex flex-wrap gap-3 px-5 py-2">
          <img className="w-16 h-16 cursor-pointer" src="../../src/assets/images/profile-image1.png" alt="profile" />
          <img className="w-16 h-16 cursor-pointer" src="../../src/assets/images/profile-image2.png" alt="" />
          <img className="w-16 h-16 cursor-pointer" src="../../src/assets/images/profile-image3.png" alt="" />
          <img className="w-16 h-16 cursor-pointer" src="../../src/assets/images/profile-image1.png" alt="" />
        </div>}
      </div>
    </div>
  );
};

export default Index;
