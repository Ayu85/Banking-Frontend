// components/AuthCheck.tsx
'use client' // This tells Next.js that this is a client-side component.

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '@/app/store/useAuth'
import Loader from './Loader'

const AuthCheck = () => {
  const { checkAuth, isAuth, authUser } = useAuth()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    setLoading(false)
  }, [checkAuth,isAuth])

  useEffect(() => {
    // If the user is not authenticated and the loading state is finished, redirect
    if (isAuth) {
      router.push('/user/dashboard')
    } else router.push('/auth/login')
    console.log(authUser)
  }, [isAuth, loading, router])

  if (loading) {
    return <Loader /> // Show a loading message while checking auth
  }

  return null // You can render nothing here or any other UI based on auth state
}

export default AuthCheck
