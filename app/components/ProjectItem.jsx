import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function ProjectItem({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="pinkBorder mb-5">
      <div className="bg-custom-dark-pink" onClick={() => setShowDetails(!showDetails)}>
        <p className="font-Inconsolata text-2xl text-custom-white dark:text-custom-black p-2 flex flex-row justify-between items-center">{project.title}<IoIosArrowDown /></p>
      </div>
      {
        showDetails &&
        <div className="p-4 flex flex-col gap-4">
          <img src={project.image} />
          <p>{project.description}</p>
          <div className='flex flex-wrap gap-2 justify-center'>
            {project.tech.map(t => {
              return <p key={t} className='bg-custom-dark-pink rounded-sm py-1 px-3 font-Inconsolata font-bold text-sm'>{t}</p>
            })}
          </div>
          <div className='mt-6 flex flex-row gap-2 justify-center md:justify-end'>
            {project.github && <a href={project.github} target='_blank' className='btn'>github</a>}
            {project.live && <a href={project.live} target='_blank' className='btn'>live</a>}
          </div>
        </div>
      }
    </div>
  )
}
