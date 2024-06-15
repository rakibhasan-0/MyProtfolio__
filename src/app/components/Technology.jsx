"use client";
import React from 'react'
import { FaReact, FaJava, FaJsSquare, FaPostgres } from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb"
import CLang from '../../../public/C.png'
import Postgres from '../../../public/postgres.png'
import Image from 'next/image'
import { motion } from "framer-motion";



export const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technology</h1>

      <motion.div 
        className="flex flex-wrap justify-center gap-5"
      >
        <motion.div 
          className="border-4 rounded-2xl border-neutral-800 p-4"
          initial={{y: 10}}
          animate={{y: 0}}
          transition={{duration: 1, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
        >
          <FaReact className="text-4xl text-blue-500" />
        </motion.div>

        <motion.div 
          className="border-4 rounded-2xl border-neutral-800 p-4"
          initial={{y: 15}}
          animate={{y: 2}}
          transition={{duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
        
        >
          <FaJava className="text-4xl text-red-600" />
        </motion.div>


        <motion.div 
          className="border-4 rounded-2xl border-neutral-800 p-4"
          initial={{y: 20}}
          animate={{y: 4}}
          transition={{duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
        >
          <FaJsSquare className="text-4xl text-yellow-500" />
        </motion.div>


        <motion.div 
          className="border-4 rounded-2xl border-neutral-800 p-4"
          initial={{y: 25}}
          animate={{y: 6}}
          transition={{duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
        >
          <Image src={CLang} alt="C" width={35} height={35} />
        </motion.div>

        <motion.div 
          className="border-4 rounded-2xl border-neutral-800 p-4"
          initial={{y: 30}}
          animate={{y: 8}}
          transition={{duration: 2.8, ease: "linear", repeat: Infinity, repeatType: "reverse"}}        
        >
            <Image src={Postgres} alt="Postgres" width={40} height={40} />
        </motion.div>


        <motion.div 
          className="border-4 rounded-2xl border-neutral-800 p-4"
          initial={{y: 35}}
          animate={{y: 10}}
          transition={{duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
        >
            <TbBrandNextjs className="text-4xl text-white"/>
        </motion.div>

      </motion.div>


    </div>
  );
}
