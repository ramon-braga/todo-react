"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([]);

  const handleAddButton = () => {
    if (itemInput.trim() === '') return;
    setList([
      ...list,
      { id: list.length + 1, label: itemInput, checked: false }
    ]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
    );
  }

  const toggleItem = (id: number) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    setList(newList);
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

        {list.map(item => (
          <li
            className="flex justify-between border-b border-b-gray-500 py-2">
              <div>
                <input onClick={() => toggleItem(item.id)} className="mr-3 w-5 h-5" type="checkbox" checked={item.checked} />
                {item.label}
              </div>

            <button
              onClick={() => deleteItem(item.id)}
              className="bg-red-700 text-xl px-2 rounded-md hover:underline">X
            </button>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Page;