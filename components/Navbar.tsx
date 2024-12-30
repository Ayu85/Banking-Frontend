'use client'

import React from 'react'
import { ModeToggle } from './ModeToggle'
import { SmartphoneNfc } from 'lucide-react'
import useAuth from '@/app/store/useAuth'

const Navbar = () => {
  const { isAuth, authUser } = useAuth()
  return (
    <div className='flex justify-between  p-4 dark:shadow-lg dark:shadow-zinc-900'>
      <h1 className='text-xl font-semibold text-[#4582EC] flex items-center  cursor-pointer justify-center gap-1'>
        Peonio
        <SmartphoneNfc />
      </h1>
      <div className='flex items-center gap-4'>
        <ModeToggle />
        <div>
          <h1 className='uppercase bg-blue-500 text-white w-8 aspect-square rounded-full text-center poppins-semibold flex justify-center items-center cursor-pointer'>
            {authUser?.fullname?.substr(0, 1)}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
