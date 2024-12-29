import React from "react";

const University = () => {
  return (
    <div className="">
      {" "}
      {/* Ensures scrolling is possible */}
      <div className="h-screen flex items-center justify-center">
        {/* Centered Name Initially */}
        <div className="sticky top-0 z-50 bg-blue-500 text-white p-4">
          Shakil Ahmed
        </div>
      </div>
      {/* Add more content here to enable scrolling */}
      <div className="h-screen bg-gray-200">
        <p className="p-4">Scroll down to see the sticky effect!</p>
      </div>
    </div>
  );
};

export default University;
