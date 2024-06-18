import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image
          src="https://imgs.search.brave.com/WhtqCLsW44TlIfWzPv7jSDbiF8ptYAhKolSZtOkr4qM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L2dvb2dsZV9sb2dv/LTY2N3g0MDAucG5n"
          alt="Google Logo"
          width={300}
          height={100}
          style={{width: "auto"}}
          priority
        />

        <HomeSearch />
      </div>
      
    </>

  )
}
