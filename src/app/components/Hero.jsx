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
                    <span className = "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl font-thin lg:text-5xl tracking-tight">
                        Gazi Md Rakibul Hasan
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
