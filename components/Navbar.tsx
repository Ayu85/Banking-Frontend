"use client"

import React from 'react'
import { ModeToggle } from './ModeToggle'
import { SmartphoneNfc } from 'lucide-react'
import useAuth from '@/app/store/useAuth'

const Navbar = () => {
  const { isAuth } = useAuth()
  return (
    <div className='flex justify-between  p-4 dark:shadow-lg dark:shadow-zinc-900'>
      <h1 className='text-xl font-semibold text-[#4582EC] flex items-center  cursor-pointer justify-center gap-1'>
        Peonio
        <SmartphoneNfc />
      </h1>
      <ModeToggle />
      {isAuth && 'logged in'}
    </div>
  )
}

export default Navbar
