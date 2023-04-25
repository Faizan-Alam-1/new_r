import React from 'react'


const About = () => {
  return (
    <div id='about'>
       <div className='w-full md:w-[85%] m-6'>
           <div>

                <p className='uppercase text-[1.2rem] text-purple-500 font-semibold'>About</p>
                <h2 className='mt-3 uppercase'>Who I Am</h2>
                <p className='mt-5'>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Excepturi reiciendis amet iure enim. 
                        Provident, tenetur. Totam ipsa saepe debitis et atque dolor quae asperiores. 
                        Itaque dicta iste quisquam ipsam assumenda?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Maxime magnam, quo iste numquam animi asperiores optio 
                        maiores voluptates alias impedit eum delectus iusto 
                        minus nobis! Deleniti odit amet consequuntur vero. Lorem 
                        ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur nobis dolor maiores ad libero, animi, nesciunt 
                        voluptas aperiam magni nihil tenetur reprehenderit quidem 
                        facere facilis assumenda corporis.
                        Libero, voluptatum accusamus.</p>

                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Excepturi reiciendis amet iure enim. 
                        Provident, tenetur. Totam ipsa saepe debitis et atque dolor quae asperiores. 
                        Itaque dicta iste quisquam ipsam assumenda? Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. In, suscipit ab. Blanditiis impedit neque voluptatum 
                        sit cupiditate ut velit est eligendi inventore. Reiciendis 
                        sed blanditiis autem aliquid! Ullam, quibusdam facilis?</p>

                      

            </div>  

            <div className='md:hidden' >
            <div className="aspect-w-4 aspect-h-2 m-[2rem] shadow-2xl rounded-[2rem]">
                <iframe className='rounded-[2rem] shadow-2xl' src="https://www.youtube.com/embed/r9jwGansp1E"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
                
           </div>


           <div className='max-md:hidden mt-4' >
                <div className="aspect-w-4 aspect-h-1 m-[4rem] shadow-2xl rounded-[2rem]">
                    <iframe className='rounded-[2rem] shadow-2xl' src="https://www.youtube.com/embed/r9jwGansp1E"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
             </div>

       </div>
    </div>
  )
}

export default About
