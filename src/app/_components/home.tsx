'use client'
import React from 'react'
import Image from "next/image";

const HomePage = () => {
 
    return (
        <>
          {/* <div className='bg-[black] h-[100%]'>    */}
            <div>
               <span className="h-12 w-12 rounded-full">
                        <Image
                          width={2000}
                          height={500}
                          src="/images/home/User-01.png"
                          style={{
                            width: "auto",
                            height: "auto",
                          }}
                          alt="User"
                          className="full"
                        />
                      </span>

               <span className="h-12 w-12 rounded-full">
                        <Image
                          width={2000}
                          height={500}
                          src="/images/home/User-02.png"
                          style={{
                            width: "auto",
                            height: "auto",
                          }}
                          alt="User"
                          className="full"
                        />
                      </span>
                      
               <span className="h-12 w-12 rounded-full">
                        <Image
                          width={2000}
                          height={500}
                          src="/images/home/User-03.png"
                          style={{
                            width: "auto",
                            height: "auto",
                          }}
                          alt="User"
                          className="full"
                        />
                      </span>
                 </div>
            {/* </div> */}
        </>
    )
}

export default HomePage
