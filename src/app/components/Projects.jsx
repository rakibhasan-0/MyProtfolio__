import React from 'react'
import {PROJECTS} from "../../../utils/constant.js"
import Image from 'next/image';

export const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <Image
              src={project.img}
              alt="project"
              width={200}
              height={200}
              className="mb-6 rounded"
            />
          </div>
          
          <div className="w-full max-w-xl lg:w-3/4">

            <h6 className='mb-2 font-semibold'>{project.tittle}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            {project.techStack.map((tech, index) => (
              <span key={index} className="bg-neutral-900 text-purple-400 px-3 py-2 rounded-xl mr-2 mb-2 border-black border">
                {tech}
              </span>
            ))}
          </div>            

        </div>
      ))}
    </div>
  );
}
