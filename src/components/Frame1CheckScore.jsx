import React from 'react';
import g from '../assets/g.png';
import graph from "../assets/Graph.png"
import score from "../assets/score.png"
import chart from "../assets/Chart.png"
import icon from "../assets/Icon.png"
import chart2 from "../assets/Chart2.png"

const Frame1CheckScore = () => {
  return (
    <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
      {/* Card 1 */}
      <div className='bg-white rounded-2xl flex items-center p-4'>
        <img src={g} alt='label' className="w-16 h-16 mr-4" />
        <div className='flex flex-col'>
          <div className='text-lg font-medium'>Check Score</div>
          <label htmlFor="upload-resume" className='text-blue-500 cursor-pointer mt-2'>
            Upload Resume
          </label>
          <input id="upload-resume" type='file' className='hidden' />
        </div>
        <div className='ml-5'>
          <img src={graph} alt='graph' className="w-20 h-16" />
        </div>
      </div>

      {/* Card 2 */}
      <div className='bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-2xl flex justify-center items-center'>
        <div className='bg-white rounded-full p-1 h-16 w-16 flex justify-center items-center ml-2'>
          <img src={score} alt='label' className="w-16 h-16" />
        </div>
        <div className='flex flex-col ml-4'>
          <div className='text-white text-base'>Latest Resume Score</div>
          <div className='text-white text-2xl font-medium'>70/100</div>
        </div>
        <div className='ml-5 mt-3'>
          <img src={chart} alt='graph' className="w-20 h-16" />
        </div>
      </div>

      {/* Card 3 */}
      <div className='bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-2xl flex justify-center items-center'>
        <div className='ml-3'>
          <img src={icon} alt='label' className="w-16 h-16" />
        </div>
        <div className='flex flex-col ml-4'>
          <div className='text-white text-base'>Targeted Resume Score</div>
          <div className='text-white text-2xl font-medium'>90/100</div>
        </div>
        <div className='ml-5 mt-3'>
          <img src={chart2} alt='graph' className="w-20 h-16" />
        </div>
      </div>
    </div>
  );
}

export default Frame1CheckScore;