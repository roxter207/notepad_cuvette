import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NotesList";
import Header from "./Components/Header";
import swal from 'sweetalert';
window.Swal = swal;

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);

  const [darkMode, setDarkMode] = useState(false);



  useEffect(() => {
    localStorage.setItem('notes-app',JSON.stringify(notes))
  }, [notes]);

  const addNote = (title, tagline, text) => {
    const date = new Date();
    const newText = {
      id: nanoid(),
      title: title,
      tagline: tagline,
      text: text,
      date: date.toDateString(),
    };
    const newNotes = [...notes, newText];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        swal({
          title: "Your note is deleted.",
          text: "Go back to write more!",
        })
      } else {
        swal({
          title: "Your note is not deleted.",
          text: "Please write more!!",
        })
      }
    });
    
  };

  return (
    <div className={`${darkMode && "dark-mode"}`} >
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
