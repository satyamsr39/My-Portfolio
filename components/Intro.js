import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className='text-center pt-16 h-160 text-5xl font-bold flex justify-center items-center'>
<div className=''>
  HI<span className='text-blue-700'>, </span>I<div className='py-4'>
AM SATYAM<div className='py-2'>SINGH</div> 
 </div>
<Link href='/resume.pdf'><button type="button" className="text-white cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Download Resume
  </button>
  </Link>
</div>

    </div>
  )
}

export default Intro
