import React from 'react'
import { FaReact, FaJava, FaJsSquare, FaPostgres } from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb"
import CLang from '../../../public/C.png'
import Postgres from '../../../public/postgres.png'
import Image from 'next/image'



export const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technology</h1>

      <div className="flex flex-wrap justify-center gap-5">
        <div className="border-4 rounded-2xl border-neutral-800 p-4">
          <FaReact className="text-4xl text-blue-500" />
        </div>
        <div className="border-4 rounded-2xl border-neutral-800 p-4">
          <FaJava className="text-4xl text-red-600" />
        </div>
        <div className="border-4 rounded-2xl border-neutral-800 p-4">
          <FaJsSquare className="text-4xl text-yellow-500" />
        </div>
        <div className="border-4 rounded-2xl border-neutral-800 p-4">
          <Image src={CLang} alt="C" width={35} height={35} />
        </div>
        <div className="border-4 rounded-2xl border-neutral-800 p-4">
            <Image src={Postgres} alt="Postgres" width={40} height={40} />
        </div>
        <div className="border-4 rounded-2xl border-neutral-800 p-4">
            <TbBrandNextjs className="text-4xl text-white"/>
        </div>
      </div>
    </div>
  );
}
