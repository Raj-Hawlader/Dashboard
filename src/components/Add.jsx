import React, { useState } from 'react';

const Add = ({ closeAdd, addItem }) => {
  const [name, setName] = useState('');
  const [orderCount, setOrderCount] = useState('');
  const [slug, setSlug] = useState('');

  const handleAddItem = () => {
    if (name && orderCount && slug) {addItem({ name, orderCount, slug }); setName(''); setOrderCount(''); setSlug(''); closeAdd();}};

  return (
    <div className='container z-1 fixed top-0 right-0 flex items-center justify-end text-white font-semibold text-lg w-full h-full bg-black/85' onClick={(e) => { if (e.target.className.includes("container")) closeAdd(); }}>
      <div className='rounded-[5px] p-[2rem] bg-white w-[25em]'>
        <form className='text-black' onSubmit={(e) => { e.preventDefault(); handleAddItem(); }}>
          <div className='flex flex-col mb-[1rem]'>
            <label htmlFor="Name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 w-full mb-2" required/>
          </div>

          <div className='flex flex-col mb-[1rem]'>
            <label htmlFor="Slug">Slug</label>
            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" className="border p-2 w-full mb-4" required/>
          </div>
          <div className='flex flex-col mb-[1rem]'>
            <label htmlFor="Order count">Order</label>
            <input type="number" value={orderCount} onChange={(e) => setOrderCount(e.target.value)} placeholder="Order Count" className="border p-2 w-full mb-2" required/>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;