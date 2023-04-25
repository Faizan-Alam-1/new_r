import React from 'react'
import Project1 from '../public/assets/projects/Project1.png'
import Project2 from '../public/assets/projects/project2.png'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>

            <p className='text-xl tracking-widest uppercase font-semibold text-purple-500'>Project</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='kkkk' 
                    backgroundImg={Project1} 
                    projectUrl='/property'
                    techStack="Next js"
                />

                <ProjectItem 
                    title='Clone - Facebook Log In Page' 
                    backgroundImg={Project2} 
                    projectUrl='/property'
                    techStack="Tailwind CSS"
                />

      </div>



         </div>




      </div>
  )
}

export default Projects