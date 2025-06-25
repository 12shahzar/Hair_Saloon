import React from "react";

const Buttons = ({ text, onClick, disabled = false }) => {
  return (
    <button
      className={`border-1 border-black font-futura w-full text-center py-1 font-custom text-sm text-[#EB1C24] cursor-pointer bg-white ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Buttons;
