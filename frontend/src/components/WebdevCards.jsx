import React from 'react'
import ProgressBar from './ProgressBar'

const WebdevCards = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='bg-[#e8bcf9] w-120 h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Frontend Technologies</h1>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'HTML'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'CSS'}</spam>
            <ProgressBar value={60}  />
        </div>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'JAVASCRIPT'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'REACT'}</spam>
            <ProgressBar value={88}  />
        </div>
      </div>
      <div className='bg-[#e8bcf9] w-120 h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Backend Technologies</h1>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'NODE.JS'}</spam>
            <ProgressBar value={70}  />
        </div>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'EXPRESS'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'MONGODB'}</spam>
            <ProgressBar value={90}  />
        </div>
        <div>
            <spam className='text-xl text-[#f6effa]'>{'MY SQL'}</spam>
            <ProgressBar value={50}  />
        </div>
      </div>
    </div>
  )
}

export default WebdevCards
