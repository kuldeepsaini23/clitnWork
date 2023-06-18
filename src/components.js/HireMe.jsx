import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={"fill-dark text-[5px] animate-spin-slow"}/>
        <button className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark hover:font-bold'>
          Hire Me
        </button> 
      </div>
    </div>
  )
}

export default HireMe