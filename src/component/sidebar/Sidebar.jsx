import React from 'react'
import { NavLink} from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { IoArchive } from "react-icons/io5";
import { MdLabelImportant } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const getStyle = ({ isActive }) => {
  return isActive ? 'text-slate-50 font-semibold bg-indigo-800 rounded-tr-full rounded-br-full px-2 py-1 flex items-center ' : 'hover:bg-indigo-800 hover:text-slate-50 rounded-tr-full rounded-br-full px-2 py-1 flex items-center';
};

export const Sidebar = () => {
  return (
    <div className='flex flex-col w-45 h-screen gap-5 p-3 border-r-2 border-r-gray-300'>
        <NavLink to='/' className={getStyle}>
       <span className='flex items-center gap-1'>
        <IoMdHome size={25}/>
        Home
       </span>
        </NavLink>
        <NavLink to='/archive'className={getStyle}>
        <span className='flex items-center gap-1'>
            <IoArchive size={25}/>
            Archive
            </span>
            </NavLink>
        <NavLink to='/important'className={getStyle}>
        <span className='flex items-center gap-1'>
            <MdLabelImportant size={25}/>
            Important
        </span>
        </NavLink>
        <NavLink to='/bin'className={getStyle}>
        <span className='flex gap-1 items-center'>
            <MdDelete size={25}/>
            Bin
        </span>
        </NavLink>
    </div>
  )
}
