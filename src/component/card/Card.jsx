import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNote } from "../context/Notecontext";
import { BsPinFill } from "react-icons/bs";
import { HiMiniArchiveBoxArrowDown } from "react-icons/hi2";
import { findNotesInArchive, findNotesInBin } from "../../utils/NoteArchive";
import { MdSettingsBackupRestore } from "react-icons/md";

export const Card = ({ title, text, id, isPinned,from }) => {
  const { noteDispatch, archive, bin } = useNote();

  const isNotesInArchive = findNotesInArchive(archive, id);
  const isNotesInBin = findNotesInBin(bin, id);
   

  const Pinnedonclick = (id) => {
    !isPinned
      ? noteDispatch({
          type: "PIN",
          payload: { id },
        })
      : noteDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const handleArchive = (id) => {
    !isNotesInArchive
      ? noteDispatch({
          type: "ADD_ARCHIVE",
          payload: { id },
        })
      : noteDispatch({
          type: "REMOVE_ARCHIVE",
          payload: { id },
        });
  };
  const handleBin = (id) =>{

   !isNotesInBin ? noteDispatch({
      type : "MOVE_BIN",
      payload:{id}
    })
:
noteDispatch({
  type:'DELETE_PERMANENT',
  payload: {id}

})

  }

  const handleRestore = (id) => {
  noteDispatch({
    type:'REMOVE_BIN',
    payload:{id}
  })
}

  return (
    <div
      className="border  p-3 border-neutral-800 rounded-md shadow-md bg-white w-[300px]"
      key={id}
    >
      {/* Title + Pin */}
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold truncate ">{title}</p>
                                       {from === "important" && (
      <span className="px-2 py-0.5 text-xs font-medium text-red-700 bg-red-100 rounded-full">
        Important
      </span>
)
}
{
  from !== "important" &&(
  !isNotesInArchive  && !isNotesInBin && (
    isPinned ? (
      <BsPinFill
        onClick={() => Pinnedonclick(id)}
        className="cursor-pointer hover:text-yellow-500"
        size={24}
      />
    ) : (
      <MdOutlinePushPin
        onClick={() => Pinnedonclick(id)}
        className="cursor-pointer hover:text-yellow-500"
        size={24}
      />
    )
  )
  )
}

      </div>

      {/* Text + Icons */}
      <div className="flex justify-between items-start">
        <p className="text-sm text-gray-700 line-clamp-3">{text}</p>
        
        <div className="flex flex-col gap-2 text-lg ml-2">
          { from !== "important" && (
            !isNotesInBin && (
              isNotesInArchive ? (
            <HiMiniArchiveBoxArrowDown
              onClick={() => handleArchive(id)}
              className="cursor-pointer hover:text-blue-500"
              size={24}
            />
          ) : (
            <HiOutlineArchiveBoxArrowDown
              onClick={() => handleArchive(id)}
              className="cursor-pointer hover:text-blue-500"
              size={24}
            />
          )
            )
            )
          }
          <RiDeleteBin5Line onClick={()=> handleBin(id)}
            className="cursor-pointer hover:text-red-500"
            size={24}
          />
          {/*restore*/}

          {
            isNotesInBin &&(

               <MdSettingsBackupRestore className="text-green-600 hover:text-green-800 text-sm underline mt-1" onClick={()=> handleRestore(id)} title="Restore" size={24}/>
      

            )
          }
         



           </div>
           
      </div>
      
    </div>
  );
};
