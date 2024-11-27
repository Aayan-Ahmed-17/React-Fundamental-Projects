import React, { useState } from "react";
import { Image , ChevronUp} from "lucide-react";
const Index = () => {
  const [selectedImg, setSelctedImg] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-96 h-20 bg-white -mt-40 flex items-center justify-between px-2">
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
          <h3 className="-ml-24 text-xl">No Image Choosen</h3>
          </>
        )}
        <ChevronUp />
      </div>
    </div>
  );
};

export default Index;
