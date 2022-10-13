import { useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const [empty, setEmpty] = useState(false);



  return (
    <>
      <div className="notes-list" >
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            tagline={note.tagline}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
         <AddNote handleAddNote={handleAddNote} />
      </div>
    </>
  );
};
export default NotesList;
