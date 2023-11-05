"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([
    { label: 'Do homework', checked: false },
    { label: 'Buy cake', checked: false }
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === '') return;
    setList([
      ...list,
      { label: itemInput, checked: false }
    ]);
    setItemInput('');
  }

const deleteItem = (index: number) => {
  setList(
    list.filter((item, key) => key !== index)
  );
}

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Todo - List</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input
          type="text"
          placeholder="What do you want to do?"
          className="flex-1 outline-none p-3 text-2xl bg-gray-700 text-gray-400 rounded-r-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton} className="text-4xl px-3 rounded-md hover:border hover:border-gray-500">+</button>
      </div>
      
      {list.length > 1 &&
      <p className="py-3">{list.length} tasks listed</p>}

      <ul className="w-full max-w-lg list-none">
        {list.map((item, index) => (
          <li
            className="flex justify-between border-b border-b-gray-500 py-2">{item.label}
            <button
              onClick={() => deleteItem(index)}
              className="bg-red-700 text-xl px-2 rounded-md hover:underline">X
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Page;