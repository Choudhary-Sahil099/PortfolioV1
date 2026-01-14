import React from 'react'
import ProgressBar from './ProgressBar'

const WebdevCards = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='bg-white w-[480px] h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Frontend Technologies</h1>
        <div>
            <span className='text-xl '>{'HTML'}</span>
            <ProgressBar value={80}  />
        </div>
        <div>
            <span className='text-xl '>{'CSS'}</span>
            <ProgressBar value={60}  />
        </div>
        <div>
            <span className='text-xl '>{'JAVASCRIPT'}</span>
            <ProgressBar value={80}  />
        </div>
        <div>
            <span className='text-xl '>{'REACT'}</span>
            <ProgressBar value={88}  />
        </div>
      </div>
      <div className='bg-white w-[480px] h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Backend Technologies</h1>
        <div>
            <span className='text-xl'>{'NODE.JS'}</span>
            <ProgressBar value={70}  />
        </div>
        <div>
            <span className='text-xl'>{'EXPRESS'}</span>
            <ProgressBar value={80}  />
        </div>
        <div>
            <span className='text-xl'>{'MONGODB'}</span>
            <ProgressBar value={90}  />
        </div>
        <div>
            <span className='text-xl'>{'MY SQL'}</span>
            <ProgressBar value={50}  />
        </div>
      </div>
    </div>
  )
}

export default WebdevCards
