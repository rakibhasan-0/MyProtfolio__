import React from 'react'
import { MY_INFO } from '../../../utils/constant'
import profilePicture from '../../../public/myImage__.jpg'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className = "pb-4 lg:mb-35">
        <div className="flex flex-wrap items-center justify-between">
            <div className ="w-full lg:w-1/2 ">
                <div className = "my-20 flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl text-white my-40 sm:my-5 font-thin tracking-tight lg:mt-16 lg:text-5xl">Gazi Md Rakibul Hasan</h1>
                    <span className = "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl font-thin lg:text-4xl tracking-tight">
                        CS student
                    </span>
                    <p className=" text-white my-20 sm:my-10 font-light">{MY_INFO}</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <div className="flex justify-center ml-20">
                    <Image src={profilePicture} alt="myImage" width={400} height={450} className='rounded-md'/>
                </div>
            </div>
        </div>
    </div>
  )
}
