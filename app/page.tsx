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

  const handleClick = () => {
    setLoading(true)
    router.push('/auth/login')
  }

  return (
    <div>
      <Button onClick={handleClick} disabled={loading}>
        {loading ? 'Redirecting...' : 'Proceed To Login'}
      </Button>
      {loading && <Loader />} {/* Custom loader here */}
    </div>
  )
}

export default Page
