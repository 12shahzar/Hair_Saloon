import React from 'react'

const BackBtn = ({onClick}) => {
  return (
      <button
          className="text-[9px] font-bold text-[#EB1C24] font-futura  cursor-pointer"
          onClick={onClick}
        >
          {"< Back"}
        </button>
  )
}

export default BackBtn
