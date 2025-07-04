import React from 'react'

const Heading = ({head,className}) => {
  return (
      <p className={`text-xs sm:text-sm  font-covered text-center text-[#EB1C24] ${className}`}>
        {head}
      </p>
  )
}

export default Heading
