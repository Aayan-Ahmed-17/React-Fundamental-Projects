import React, { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";
import { Image, ChevronUp, ChevronDown } from "lucide-react";

const INITIAL_STATE = {
  selectedImage: null,
  isOpen: false,
  selectedImageId: null,
};

const ImageSelector = ({ onImageSelect, className = "", defaultImage = null }) => {
  const [state, setState] = useState({
    ...INITIAL_STATE,
    selectedImage: defaultImage,
  });
  
  const [imageError, setImageError] = useState(null);

  const imgUrls = [
    "../../src/assets/images/profile-image1.png",
    "../../src/assets/images/profile-image2.png",
    "../../src/assets/images/profile-image3.png",
    "../../src/assets/images/profile-image1.png",
  ];

  const toggleDropdown = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const handleImageSelect = useCallback((id) => {
    try {
      if (id < 0 || id >= imgUrls.length) {
        throw new Error("Invalid image selection");
      }

      const selectedImage = imgUrls[id];
      setState(prev => ({
        ...prev,
        selectedImage,
        selectedImageId: id,
      }));

      onImageSelect?.(selectedImage);
    } catch (error) {
      setImageError(error.message);
      console.error("Error selecting image:", error);
    }
  }, [imgUrls, onImageSelect]);

  const handleImageError = useCallback(() => {
    setImageError("Failed to load image");
    setState(prev => ({
      ...prev,
      selectedImage: null,
    }));
  }, []);

  const renderImagePreview = () => {
    if (state.selectedImage) {
      return (
        <img
          className="w-16 h-16 object-cover rounded-full cursor-pointer"
          src={state.selectedImage}
          alt="Selected profile"
          onError={handleImageError}
        />
      );
    }

    return (
      <div className="flex items-center gap-4">
        <Image className="text-slate-800" size={50} />
        <h3 className="text-xl">No Image Chosen</h3>
      </div>
    );
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="w-[22rem] h-20 bg-white flex items-center justify-between px-2 rounded-t-md">
        {renderImagePreview()}
        
        <button
          onClick={toggleDropdown}
          className="p-2 hover:bg-slate-200 rounded-full transition-colors"
          aria-label={state.isOpen ? "Close image selector" : "Open image selector"}
        >
          {state.isOpen ? (
            <ChevronUp className="cursor-pointer" />
          ) : (
            <ChevronDown className="cursor-pointer" />
          )}
        </button>
      </div>

      {state.isOpen && (
        <div className="w-[22rem] bg-red-500 grid grid-cols-2 gap-3 p-4 rounded-b-md">
          {imgUrls.map((url, index) => (
            <button
              key={index}
              onClick={() => handleImageSelect(index)}
              className="group relative"
            >
              <img
                className="w-full h-32 object-cover rounded-md transition-transform 
                         group-hover:scale-105 group-hover:shadow-lg"
                src={url}
                alt={`Profile option ${index + 1}`}
                onError={() => setImageError(`Failed to load image ${index + 1}`)}
              />
            </button>
          ))}
        </div>
      )}

      {imageError && (
        <div className="mt-2 p-2 text-red-500 bg-red-50 rounded-md text-sm">
          {imageError}
        </div>
      )}
    </div>
  );
};

ImageSelector.propTypes = {
  onImageSelect: PropTypes.func,
  className: PropTypes.string,
  defaultImage: PropTypes.string,
};

export default memo(ImageSelector);