import React from 'react'
import Image from 'next/image'


function Skill() {
  return (
    <div id='skill' className='mt-20'>
      
      <div className='uppercase m-6 text-[1.3rem] font-semibold text-purple-500'>
        <p className='text-[1.2rem]'>Skill</p>
      </div>

      <div className='mt-3 ml-6'>
        <h2 className='uppercase'>What I can Do</h2>
      </div>

      <div className='md:flex'>

       
        <div className='w-[95%] h-[6rem] bg-white m-7  rounded-lg shadow-2xl hover:bg-gray-100 flex justify-center items-center'>
          <Image src="/assets/skills/html.png" alt='/' width='75' height='40'/>
          <Image src="/assets/skills/css.png" alt='/' width='75' height='40'/>
          <Image src="/assets/skills/js.png" alt='/' width='75' height='40'/>
        </div>

        
        <div className='w-[93%] h-[6rem] bg-white m-7  rounded-lg shadow-2xl hover:bg-gray-100 flex justify-center items-center'>
          <Image src="/assets/skills/firebase.png" alt='/' width='75' height='40'/>
          <Image src="/assets/skills/tailwind.png" alt='/' width='75' height='40'/>
          <Image src="/assets/skills/React.png" alt='/' width='75' height='40'/>
        </div>

      </div>
    
    </div>
  )
}

export default Skill
