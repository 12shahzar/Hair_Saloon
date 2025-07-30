import React from 'react'

const BackBtn = ({onClick}) => {
  return (
      <button
          className="text-[9px] font-medium text-black font-futura cursor-pointer mt-2 w-fit mx-2"
          onClick={onClick}
        >
          {"< BACK"}
        </button>
  )
}

export default BackBtn
