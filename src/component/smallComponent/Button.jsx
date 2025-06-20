import React from "react";
const Buttons = ({ text, onClick }) => {
  return (
    <button
      className="border-1 border-black font-futura w-full text-center py-1 font-medium text-[9px] text-[#EB1C24] cursor-pointer custom-gradient"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Buttons;
