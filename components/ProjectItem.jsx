import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectItem({title,backgroundImg, projectUrl , techStack}) {
  return (
    <div className='flex  items items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover: bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
            <div className=' hidden group-hover:block absolute'>
                <h3 className='text-2xl text-white tracking-wide text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{techStack}</p>
            </div>
                       
            <div className='hidden group-hover:block absolute mt-[8rem] bg-white p-3 rounded-lg hover:bg-gray-200 font-bold'>
                <Link href={projectUrl}>
                  <p>More Info</p>
                </Link>  
            </div>
                                
    </div>
    
  )
}

export default ProjectItem
