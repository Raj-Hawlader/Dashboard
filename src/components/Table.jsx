import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
const Table = ({ items, onDelete }) => {

  return (

    <div className='fixed right-[100px] top-0 w-[900px] h-[600px] bg-gray-200'>

      <table className='w-[100%]'>
        <thead className='bg-gray-400 text-gray-800'>
          <tr className='flex items-start justify-around gap-9 m-[1.5rem] px-[1rem]'>
            <th>Category Name</th>
            <th>Slug</th>
            <th>Order count</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index} className='flex items-start justify-around gap-9 m-auto p-[1rem] cursor-pointer hover:bg-gray-300'>
              <td>{item.name}</td>
              <td>{item.slug}</td>
              <td>{item.orderCount}</td>
              <td className='flex text-2xl gap-4'>
                <FaRegEdit className='text-green-700' />
                <AiOutlineDelete className='text-red-700' onClick={() => onDelete(index)} />
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Table;