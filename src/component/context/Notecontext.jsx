import { createContext, useContext } from "react";
import { noteReducer } from "../../reducer/noteReducer";
import { useReducer } from "react";



const NoteContext = createContext()


const NoteProvider = ({children}) => {

      const initialState = {
    title : '',
    text : '',
    notes: [],
    archive: [],
    bin: [],
    important:[]
   
  }


const [{title, text, notes, archive,bin,important}, noteDispatch] = useReducer(noteReducer, initialState)

    return(
<NoteContext.Provider value={{title,text,notes,archive,bin,important, noteDispatch}}>
    {children}
</NoteContext.Provider>
    )
}

const useNote =  () => useContext(NoteContext);
export {useNote, NoteProvider} ;