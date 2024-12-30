import React from 'react'
import { LoaderCircle } from 'lucide-react'

const Loader = () => {
  return (
    <div className='w-screen flex justify-center items-center h-screen absolute top-0 left-0 bg-zinc-800 bg-opacity-55'>
      <LoaderCircle className='animate-spin size-16 text-[#4784ed]' />
    </div>
  )
}

export default Loader
