import { v4 as uuidv4 } from "uuid";
export const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: state.title,
            text: state.text,
            id: uuidv4(),
            isPinned: false,
            
          },
        ],
      };
    case "CLEAR_NOTE":
      return {
        ...state,
        title: "",
        text: "",
      };

    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    case "ADD_ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };

    case "REMOVE_ARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === payload.id),
        ],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };
   case 'MOVE_BIN': {
  const noteFromNotes = state.notes.find(({ id }) => id === payload.id);
  const noteFromImportant = state.important.find(({ id }) => id === payload.id);

  const noteToMove = noteFromNotes
    ? { ...noteFromNotes, origin: "notes" }
    : noteFromImportant
    ? { ...noteFromImportant, origin: "important" }
    : null;

  if (!noteToMove) return state;

  return {
    ...state,
    bin: [...state.bin, noteToMove],
    notes: state.notes.filter(({ id }) => id !== payload.id),
    important: state.important.filter(({ id }) => id !== payload.id),
  };
}



    case 'REMOVE_BIN': {
  const noteToRestore = state.bin.find(({ id }) => id === payload.id);
  if (!noteToRestore) return state;

  const { origin, ...restoredNote } = noteToRestore;

  return {
    ...state,
    notes:
      origin === "notes"
        ? [...state.notes, restoredNote]
        : state.notes,
    important:
      origin === "important"
        ? [...state.important, restoredNote]
        : state.important,
    bin: state.bin.filter(({ id }) => id !== payload.id),
  };
}


      case 'DELETE_PERMANENT': return{
        ...state,
        bin: state.bin.filter(({id})=> id !== payload.id)
      }

      case'IMPORTANT_TITLE' : return{
        ...state,
        title: payload
      }
      case 'IMPORTANT_TEXT' : return{
        ...state,
        text : payload
      }

      case 'ADD_IMPORTANT_NOTE':     return {
        ...state,
        important: [
          ...state.important,
          {
            title: state.title,
            text: state.text,
            id: uuidv4(),
            isImportant: false,
            
          },
        ],
      };
    case "CLEAR_IMPORTANT_NOTE":
      return {
        ...state,
        title: "",
        text: "",
      };
    default:
      return state;
  }
};
