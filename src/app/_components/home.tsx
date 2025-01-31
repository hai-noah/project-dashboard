'use client'
import React from 'react'
import Image from "next/image";

const HomePage = () => {
 
    return (
        <>
        
            <div>
               <span className="h-12 w-[100%] rounded-full">
                        <Image
                          width={1500}
                          height={500}
                          src="/images/home/User-01.png"
                          // style={{
                          //   width: "auto",
                          //   height: "auto",
                          // }}
                          alt="User"
                          className="full"
                        />
                      </span>
                           
               <span className="h-12 w-[100%]  rounded-full">
                        <Image
                          width={1500}
                          height={500}
                          src="/images/home/User-02.png"
                          // style={{
                          //   width: "auto",
                          //   height: "auto",
                          // }}
                          alt="User"
                          className="full"
                        />
                      </span>

               <span className="h-12 w-[100%]  rounded-full">
                        <Image
                          width={1500}
                          height={500}
                          src="/images/home/User-03.png"
                          // style={{
                          //   width: "auto",
                          //   height: "auto",
                          // }}
                          alt="User"
                          className="full"
                        />
                      </span>
                 </div>
          
        </>
    )
}

export default HomePage
