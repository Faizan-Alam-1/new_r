import React from 'react'
import { AiFillLinkedin , AiOutlineGithub  , AiFillMail} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import Typewriter from 'typewriter-effect';

function Main() {
  return (
    <div className='flex flex-col items-center mt-20'>
      <p className='uppercase text-sm tracking-widest text-gray-600'>Welcome, to my portfolio website <span className='text-[1.5rem]'>👋</span></p>
      <h1 className='max-md:hidden m-8'>Hi, I'm 
      <span><h2 className='tracking-widest'>
          <Typewriter
                      options={{
                        strings: ['A Web Developer', 'A Engineer' ],
                        autoStart: true,
                        loop: true,
                      }}
           />
        </h2></span> </h1>

        {/* I'm looking for a position in the front end development. */}


      <p className='py-2 max-md:hidden text-gray-600 max-w-[50%] m-auto tracking-widest '>
      Hey everyone ! I'm a front-end web developer with a passion for building great user interfaces. 
      At the moment, I'm focusing on building responsive web applications.</p>
      <h3 className='mt-2 max-md:hidden uppercase tracking-widest'>I'm looking for a position in the
      <span>

      <Typewriter
                  options={{
                    strings: ["front end development."],
                    autoStart: true,
                    loop: true,
                  }}
                />

      </span></h3>
   

       <div className='max-w-[100%] m-auto my-7 md:hidden'>
            <h1>Hi, I'm</h1>
            <span><h2 className='my-3'>
                  <Typewriter
                  options={{
                    strings: ['A Web Developer', 'A Engineer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </h2></span>
        </div>

        <div>
            <p className='py-1 text-gray-600 max-w-[60%] md:hidden m-auto'>
            Hey everyone ! I'm a front-end web developer with a passion for building great user interfaces. 
            At the moment, I'm focusing on building responsive web applications.</p>
            <h3 className='mt-2 ml-[6rem] md:hidden'>I'm looking for a position in 
            <span>

              <Typewriter
                          options={{
                            strings: ["the front end development."],
                            autoStart: true,
                            loop: true,
                          }}
                        />

            </span></h3>

        </div>

        <div className='flex'>

            <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><AiFillLinkedin size={30} className='text-blue-700'/></div>
            <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><AiOutlineGithub size={30} className='text-black'/></div>
            <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><AiFillMail size={30} className='text-red-600'/></div>
            <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><RiWhatsappFill size={30} className='text-green-600'/></div>

        </div>

           
      




    </div>
   
  )
}

export default Main
