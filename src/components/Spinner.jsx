import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-90px)] flex justify-center items-center bg-base-200">
      <div className="text-6xl flex items-center gap-1">
        <p>L</p>
        <p className="w-9 h-9 border-[6px] border-dashed rounded-full relative top-2 border-blue-400 animate-spin"></p>
        <p>ading....</p>
      </div>
    </div>
  );
};

export default Spinner;
