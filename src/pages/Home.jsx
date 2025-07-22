import React from "react";
import { Sidebar } from "../component/sidebar/Sidebar";
import { IoMdAdd } from "react-icons/io";
import { useNote } from "../component/context/Notecontext";
import { Card } from "../component/card/Card";

export const Home = () => {
  const { title, text, notes, archive, bin, noteDispatch } = useNote();

  const pinnedNotes = notes?.filter(({ isPinned }) => isPinned);
  const otherNotes = notes?.filter(({ isPinned }) => !isPinned); // ✅ fixed

  

  const handleChangeTitle = (e) => {
    noteDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const handleChangeText = (e) => {
    noteDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const handleAdd = () => {
    noteDispatch({
      type: "ADD_NOTE",
    }),
      noteDispatch({
        type: "CLEAR_NOTE",
      });
  };

  


  return (
    <div className="flex gap-4 min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-full   ">
        {/* Main content */}
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

        <div className="mt-14 flex flex-col gap-10">
          {pinnedNotes.length > 0 && (
            <div className="px-6">
              <h2 className="text-lg font-semibold mb-2">📌 Pinned</h2>
              <div className="flex flex-wrap gap-4">
                {pinnedNotes.map(({ title, text, id, isPinned }) => (
                  <Card
                    key={id}
                    title={title}
                    text={text}
                    id={id}
                    isPinned={isPinned}
                  />
                ))}
              </div>
            </div>
          )}
          {otherNotes.length > 0 && (
            <div className="px-6">
              <h2 className="text-lg font-semibold mb-2">Notes</h2>

              <div className="flex flex-wrap gap-4">
                {otherNotes.map(({ title, text, id, isPinned }) => (
                  <Card
                    key={id}
                    title={title}
                    text={text}
                    id={id}
                    isPinned={isPinned}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
