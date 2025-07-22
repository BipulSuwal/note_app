import React from 'react'
import logo from '../../assets/image/notes.png'

export const Nav = () => {
  return (
    <header className='flex px-5 py-1 gap-3 border-b-2 border-b-gray-200'>

      <div className='w-14 h-14'>
    <img className='w-full h-full' src={logo} alt="" />
      </div>

  

 
      <h1 className='text-4xl text-indigo-800 font-bold'>Note App</h1>
  
    </header>
  )
}
