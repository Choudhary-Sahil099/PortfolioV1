import React from 'react'

const ProgressBar = ({value}) => {
  return (
   <div className="w-full bg-white rounded-sm h-4 overflow-hidden border border-[#cac9cc]">
      <div
        className="bg-purple-600 h-full rounded-sm transition-all duration-500 "
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export default ProgressBar
