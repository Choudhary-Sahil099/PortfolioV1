import React from 'react'
import ProgressBar from './ProgressBar'

const MLCards = () => {
  return (
     <div className='flex flex-col gap-3'>
      <div className='bg-white w-120 h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Data Handling & EDA</h1>
        <div>
            <spam className='text-xl '>{'Pandas'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl '>{'Numpy'}</spam>
            <ProgressBar value={60}  />
        </div>
        <div>
            <spam className='text-xl '>{'MatPlotlib'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl '>{'Seaborn'}</spam>
            <ProgressBar value={88}  />
        </div>
      </div>
      <div className='bg-white w-120 h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>ML Engineering</h1>
        <div>
            <spam className='text-xl'>{'Flask'}</spam>
            <ProgressBar value={70}  />
        </div>
        <div>
            <spam className='text-xl'>{'Streamlit'}</spam>
            <ProgressBar value={80}  />
        </div>
        <div>
            <spam className='text-xl'>{'Rest API'}</spam>
            <ProgressBar value={90}  />
        </div>
        <div>
            <spam className='text-xl'>{'Supervised & Unsupervised Learning'}</spam>
            <ProgressBar value={50}  />
        </div>
      </div>
    </div>
  )
}

export default MLCards
