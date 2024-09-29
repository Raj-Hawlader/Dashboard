import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Add from './components/Add';
import Table from './components/Table';


const App = () => {
  const [btnClick, setBtnClick] = useState(false);
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className='flex'>
        <Sidebar />
      </div>
      <Table items={items} onDelete={handleDeleteItem} />
      <button onClick={() => setBtnClick(true)} className='fixed top-[290px] right-3 border px-6 py-2 bg-blue-500 rounded-[20px] hover:bg-blue-600 hover:text-white text-black text-[17px]'>Add</button>
      {btnClick && <Add closeAdd={() => setBtnClick(false)} addItem={handleAddItem} />}
    </div>
  );
};

export default App;