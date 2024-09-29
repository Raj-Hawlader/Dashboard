import React from 'react'
import { RiAdminLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className='bg-gray-300 text-gray-900 h-screen px-4 fixed w-full md:w-64 border-r border-gray-400'>
        <h1 className='text-2xl font-bold hidden md:block mt-4 text-center'>Admin</h1>

        <ul className='flex flex-col mt-7 text-xl'>
            <li className='flex items-center py-3 px-2 space-x-4 rounded cursor-pointer bg-blue-600 text-white'>
                <RiAdminLine/>
                <span className='hidden md:inline '>Dashboard</span>
            </li>

            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <LuShoppingCart/>
                <span className='hidden md:inline'>Orders</span>
            </li>

            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <BsPeople/>
                <span className='hidden md:inline'>Customers</span>
            </li>

            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <AiOutlineProduct/>
                <span className='hidden md:inline'>Products</span>
            </li>

            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <RiUserSettingsLine/>
                <span className='hidden md:inline'>Users</span>
            </li>
            
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <IoSettingsOutline/>
                <span className='hidden md:inline'>Settings</span>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar