import Image from 'next/image'
import React from 'react'
import hello from "../../public/images/best-value-banner.png"
import { storageUrl } from '@/utils/baseUrl'

const CertificateView = ({data,id}:any) => {
  
  return (
    <div className='w-full h-full flex justify-center '>
        <div className=''>
          <Image src={storageUrl + data.certificatePhoto} alt='' width={500} height={400} />
        </div>
    </div>
  )
}

export default CertificateView