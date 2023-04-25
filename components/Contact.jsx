import React from 'react'
import Image from 'next/image'
import { AiFillFacebook , AiFillInstagram } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link';
function Contact() {
  return (
    <div id='contact' className='m-5'>
        <div>
            <p className='uppercase m-3 text-purple-500 font-semibold'>contact</p>
            <h2 className='uppercase m-3'>Get In Touch</h2>
        </div>

        <div className='md:flex'>


            <div className='bg-white flex flex-col justify-center items-center md:w-[40%] rounded-3xl shadow-2xl mr-14 ml-9'>
                    <Image className= " hover:scale-105 ease-in duration-300 m-4 p-5 rounded-3xl " src="/assets/Image/contact.jpg" alt='/' width='600' height='500'/>
                    <h2>Faizan Alam</h2>
                    <p className='uppercase'>Connect with Me</p>
                    <div className='flex'>
                        <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'><AiFillFacebook size={30} className='text-blue-700'/></div>
                        <div className='m-3 rounded-full shadow-lg w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-gray-200'>< AiFillInstagram size={30} className='text-pink-400'/></div>
                    </div>
            </div>


            <div className=' w-full h-auto shadow-2xl shadow-gray-400 rounded-xl mt-3 mr-16'>
              <div className='p-4'>
                <form>
                    <div className='w-full py-2 px-2'>
                        <div className='flex flex-col m-3'>
                            <label className='uppercase text-sm py-2'>Name</label>
                             <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text"/>
                        </div>

                        <div className='flex flex-col m-3'>
                            <label className='uppercase text-sm py-2'>Phone</label>
                             <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="number"/>
                        </div>

                        <div className='flex flex-col m-3'>
                            <label className='uppercase text-sm py-2'>Email</label>
                             <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="email"/>
                        </div>

                        <div className='flex flex-col m-3'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                             <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text"/>
                        </div>

                        <div className='flex flex-col m-3'>
                            <label className='uppercase text-sm py-2'>Message</label>
                             <textarea className='border-2 rounded-lg p-2 border-gray-300 rows=10'></textarea>
                        </div>

                    </div>

                    <button  className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                    
                </form>

               
              </div>
            </div>
        </div>

           

      <div className='flex  justify-center mt-2'>
         <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 p-6'>
                <HiOutlineChevronDoubleUp size={35}/>
            </div>
         </Link>
      </div>  
           
      
    </div>
  )
}

export default Contact
