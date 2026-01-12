import React from 'react'
import ProgressBar from './ProgressBar'

const WebdevCards = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='bg-white w-120 h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Frontend Technologies</h1>
        <div>
            <spam className='text-xl '>{'HTML'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl '>{'CSS'}</spam>
            <ProgressBar value={60}  />
        </div>
        <div>
            <spam className='text-xl '>{'JAVASCRIPT'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl '>{'REACT'}</spam>
            <ProgressBar value={88}  />
        </div>
      </div>
      <div className='bg-white w-120 h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Backend Technologies</h1>
        <div>
            <spam className='text-xl'>{'NODE.JS'}</spam>
            <ProgressBar value={70}  />
        </div>
        <div>
            <spam className='text-xl'>{'EXPRESS'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl'>{'MONGODB'}</spam>
            <ProgressBar value={90}  />
        </div>
        <div>
            <spam className='text-xl'>{'MY SQL'}</spam>
            <ProgressBar value={50}  />
        </div>
      </div>
    </div>
  )
}

export default WebdevCards
