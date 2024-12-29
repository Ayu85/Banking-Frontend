import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
const layout = () => {
  return (
    <div className='flex justify-center flex-col  items-center h-[90vh]  overflow-hidden'>
      <div className='flex flex-col gap-4 border-zinc-600 rounded-lg border p-10'>
        <h1 className='text-2xl  poppins-semibold'>Please Login to continue</h1>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' placeholder='Email' />
          <Label htmlFor='email'>Password</Label>
          <Input type='password' id='email' placeholder='Password' />
          <Button className='mt-4'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default layout
