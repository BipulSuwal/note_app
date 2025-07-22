import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { Card } from '../card/Card'
import { useNote } from '../context/Notecontext'

export const Bin = () => {

  const {bin} = useNote();

  return (
<div className=" bg-gray-100 flex gap-4 min-h-screen">
    <Sidebar/>
    <div className="flex flex-col w-full">

       <div className="flex flex-wrap gap-4 mt-7">
                {bin.map(({ title, text, id, isPinned }) => (
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
        
  )
}
