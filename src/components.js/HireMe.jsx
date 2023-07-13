import React from 'react'
import { CircularText, MotionText } from './Icons'
import Link from 'next/link'
import motion from "../../public/images/Motion.png"
import motiondark from "../../public/images/MotionDark.png" 
import Image from 'next/image'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        {/* <CircularText className={"fill-dark text-[5px] animate-spin-slow dark:fill-light"}/> */}
        <Image src={motion} className="animate-spin-slow dark:hidden"/>
        <Image src={motiondark} className='animate-spin-slow dark:block hidden'/>
        <Link className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark hover:font-bold dark:text-dark hover:dark:text-light dark:border-light md:w-12 md:h-12 md:text-[10px] dark:bg-light hover:dark:bg-dark font-bold'
          href="/contact">
          Hire Me
        </Link> 
      </div>
    </div>
  )
}

export default HireMe