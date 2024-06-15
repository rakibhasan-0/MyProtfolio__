"use client"
import { MY_INFO } from '../../../utils/constant';
import profilePicture from '../../../public/myImage__.jpg';
import Image from 'next/image';
import { motion } from "framer-motion";


export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2">
          <div className="my-20 flex flex-col items-center lg:items-start">
            <motion.h2
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7}}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl font-thin lg:text-5xl tracking-tight"
            >
              Gazi Md Rakibul Hasan
            </motion.h2>
            <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5}}
                className="text-white my-20 sm:my-10 font-light"
            >
              {MY_INFO}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
        <motion.div 
            className="flex justify-center ml-20"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2}}
        >
            <Image
              src={profilePicture}
              alt="myImage"
              width={400}
              height={450}
              className="rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
