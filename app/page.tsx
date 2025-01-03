'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import useAuth from './store/useAuth'

const Page = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { checkAuth, isAuth } = useAuth()


  return (
    <div className='flex items-center justify-center text-3xl poppins-bold'>
      <h1>Welcome to Peonio</h1>
      {loading && <Loader />} {/* Custom loader here */}
    </div>
  )
}

export default Page
