import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { useNote } from "../context/Notecontext";
import { Card } from "../card/Card";

export const Archive = () => {
  const { archive } = useNote();

  return (
    <div className=" bg-gray-100 flex gap-4 min-h-screen">
      <Sidebar />

      <div className="flex flex-col w-full  ">
        <div className="flex flex-wrap gap-4 mt-7">
          {archive.map(({ title, text, id, isPinned }) => (
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
    </div>
  );
};
