import React , {useState}from 'react'
import Image from 'next/image'

import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import { AiFillLinkedin , AiOutlineGithub  , AiFillMail} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";



// BsXLg

const Navbar = () => {
    const [nav ,  setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <div className='w-full  h-20 shadow-xl'>
        <div className='flex justify-between items-center w-full  h-full'>
          <Image src="/assets/NavBar.png" alt='/' width='100' height='50'/>
         
          <div className='mr-4'>
               <ul className = 'hidden  md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase  hover:font-bold'>Home</li>
                    </Link>

                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase  hover:font-bold'>About</li>
                    </Link>

                    <Link href='/#skill'>
                        <li className='ml-10 text-sm uppercase  hover:font-bold'>Skill</li>
                    </Link>

                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase  hover:font-bold'>Project</li>
                    </Link>

                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase  hover:font-bold'>contact</li>
                    </Link>
                </ul>

                <div onClick={handleNav} className='md:hidden'>
                  <FiMenu  size={36} className='mr-7'/>
                </div>

            </div>

        </div>

        <div className={nav? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : 'hidden'}> 

          <div className={nav? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-white': 
          'fixed left-[-100] top-0 ease-in duration-300'}>
            <div className='flex justify-between'>
              <div>
                <Image src="/assets/NavBar.png" alt='/' width='100' height='50'/>
              </div>
              <div onClick={handleNav}  className='rounded-full flex justify-center items-center px-8 shadow-lg m-2 hover:bg-gray-200 '>
                <BsXLg size={30} />
              </div>

            </div>

            <div className='m-10 border-b text-lg font-semibold text-gray-800'>
                <p className='uppercase'><span className='font-bold uppercase'><span className='text-[1.5rem]'>W</span>elcome,</span> to my portfolio website 👋 </p>
            </div> 

            <div>
                <ul className = 'flex flex-col justify-center items-center'>
                        <Link href='/'>
                            <li onClick={()=>setNav(false)}  className='ml-10 text-lg uppercase hover:border-b hover:font-bold p-2'>Home</li>
                        </Link>

                        <Link href='/#about'>
                            <li onClick={()=>setNav(false)}  className='ml-10 text-lg uppercase hover:border-b hover:font-bold p-2'>About</li>
                        </Link>

                        <Link href='/#skill'>
                            <li onClick={()=>setNav(false)}  className='ml-10 text-lg uppercase hover:border-b hover:font-bold p-2'>Skill</li>
                        </Link>

                        <Link href='/#projects'>
                            <li onClick={()=>setNav(false)}  className='ml-10 text-lg uppercase hover:border-b hover:font-bold p-2'>Project</li>
                        </Link>

                        <Link href='/#contact'>
                            <li onClick={()=>setNav(false)}  className='ml-10 text-lg uppercase hover:border-b hover:font-bold p-2'>contact</li>
                        </Link>
                </ul>

                
            </div>


            <div className='mt-9 ml-8'>
                <p className='text-[1.2rem] font-bold uppercase text-purple-500'><span className='text-[2rem]'>L</span>et's connect</p>
                 <div className='flex justify-evenly'>

                    <div className='rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'>
                        <AiFillLinkedin size={30} className='text-blue-700'/>
                    </div>
                    <div className='rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'>
                        <AiOutlineGithub size={30} className='text-black'/>
                    </div>
                    <div className='rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'>
                        <AiFillMail size={30} className='text-red-600'/>
                    </div>
                    <div className='rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'>
                        <RiWhatsappFill size={30} className='text-green-600'/>
                    </div>
                 </div>
            </div>

          </div>

        </div>
           
    </div>
  )
}

export default Navbar
