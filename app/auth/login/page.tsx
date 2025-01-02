'use client'
import React, { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { axiosIns } from '@/app/utils/axiosIns'
import { useToast } from '@/hooks/use-toast'
import useAuth from '@/app/store/useAuth'

const layout = () => {
  const { toast } = useToast()
  const { isAuth, login } = useAuth()
  const email = useRef('')
  const password = useRef('')
  const handlelogin = async () => {
    try {
      const res = await axiosIns.post('/auth/login', {
        email: email.current,
        password: password.current
      })
      toast({
        variant: 'default',
        title: 'Logged in!'
      })
      login(res.data.user)
    } catch (error) {
      console.log(error)

      toast({
        variant: 'destructive',
        title: error.response.data.msg
      })
    }
  }
  return (
    <div className='flex justify-center flex-col  items-center h-[90vh]  overflow-hidden'>
      <div className='flex flex-col gap-4 border-zinc-600 rounded-lg border p-10'>
        <h1 className='text-2xl  poppins-semibold'>Please Login to continue</h1>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='email'>Email</Label>
          <Input
            ref={email}
            type='email'
            id='email'
            placeholder='Email'
            onChange={e => (email.current = e.target.value)}
          />
          <Label htmlFor='email'>Password</Label>
          <Input
            ref={password}
            type='password'
            id='password'
            placeholder='Password'
            onChange={e => (password.current = e.target.value)}
          />
          <Button onClick={() => handlelogin()} className='mt-4'>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default layout
