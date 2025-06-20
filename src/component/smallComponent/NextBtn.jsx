import React from "react";

const NextBtn = ({onClick}) => {
  return (
    <button
      className="text-[9px] font-bold text-[#EB1C24] font-futura  cursor-pointer"
      onClick={onClick}
    >
      {" Next >"}
    </button>
  );
};

export default NextBtn;
