import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { useNote } from '../context/Notecontext'
import { IoMdAdd } from "react-icons/io";
import { Card } from '../card/Card';

export const Important = () => {

  const {title, text, important, noteDispatch } = useNote();


const handleChangeTitle = (e) =>
{
noteDispatch(
  {
    type:'IMPORTANT_TITLE',
    payload: e.target.value,
  }
);
};

const handleChangeText = (e) =>{
  noteDispatch({
    type:"IMPORTANT_TEXT",
    payload: e.target.value,
  });

};

const handleAdd = (e) =>{

  noteDispatch({
   type: "ADD_IMPORTANT_NOTE",
  }),
  noteDispatch({
    type:'CLEAR_IMPORTANT_NOTE'
  });

};

console.log(important)


  return (
<div className=" bg-gray-100 flex gap-4 min-h-screen">

    <Sidebar/>
    
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-6  items-center mt-7">
                <div className="relative max-w-md bg-white p-4 rounded-lg shadow-md border ">
                  <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    placeholder="Enter title"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring focus:border-indigo-400"
                  />
      
                  <textarea
                    value={text}
                    onChange={handleChangeText}
                    placeholder="Enter text"
                    className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring focus:border-indigo-400"
                  />
      
                  {/* Floating button */}
                  <button
                    disabled={title.length === 0}
                    onClick={handleAdd}
                    className="absolute bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
                  >
                    <IoMdAdd size={24} />
                  </button>
                </div>
              </div>


                   <div className="flex flex-wrap gap-4">
                              {important.map(({ title, text, id, isPinned }) => (
                                <Card
                                  key={id}
                                  title={title}
                                  text={text}
                                  id={id}
                                  isPinned={isPinned}
                                  from="important"
                                />
                              ))}
                            </div>


    </div>

</div>
        

  )
}
