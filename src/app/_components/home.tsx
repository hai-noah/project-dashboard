'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const HomePage = () => {
 
    return (
        <>
        
            <div>

             <div className='relative'>
             <Link href={"/login"}>
                <button
                      className="absolute top-[26rem] left-[14.5rem] bg-white text-black  z-50 h-10 w-[10%] items-start rounded-full dark:bg-white dark:text-black"
                      type="submit"             >
                    Login
                    </button>
             </Link>
              
                 <span className="h-12 w-[100%] rounded-full">
                 <div className="relative w-full h-[40rem]"><Image
                           fill
                            src="/images/home/User-01.png"
                            // style={{
                            //   width: "auto",
                            //   height: "auto",
                            // }}
                            alt="User"
                            className="object-fill"
                            /></div>
                            </span>
             </div>

                           <br></br>

               <span className="h-12 w-[100%]  rounded-full">
                         <div className="relative w-full h-[40rem]"><Image
                         fill
                          src="/images/home/User-02.png"
                          // style={{
                          //   width: "auto",
                          //   height: "auto",
                          // }}
                          alt="User"
                           className="object-fill"
                           /></div>
                      </span>
                      <br></br>

               <span className="h-12 w-[100%]  rounded-full">
               <div className="relative w-full h-[40rem]"> <Image
                          fill
                          src="/images/home/User-03.png"
                          // style={{
                          //   width: "auto",
                          //   height: "auto",
                          // }}
                          alt="User"
                          className="object-fill"
                          /></div>
                      </span>
                 </div>
          
        </>
    )
}

export default HomePage
