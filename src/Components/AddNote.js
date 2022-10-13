import { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTag, setNoteTag] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [show, setShow] = useState(false);

  const characterLimit = 200;

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeTag = (event) => {
    setNoteTag(event.target.value);
  };

  const handleChangeText = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleAddClick = (event) => {
    if (
      noteTitle.trim().length > 0 &&
      noteTag.trim().length > 0 &&
      noteText.trim().length > 0
    ) {
      handleAddNote(noteTitle, noteTag, noteText);
      setNoteTitle("");
      setNoteTag("");
      setNoteText("");
    }
    setShow((prev) => !prev);
  };

  return (
    <>
      {show && (
        <>
          <div className="note-new">
            <div className="cross">
              <ImCross onClick={() => setShow((prev) => !prev)}/>
            </div>
            <input
              placeholder="Give a good title"
              value={noteTitle}
              onChange={handleChangeTitle}
            ></input>
            <input
              placeholder="Write a good tagline"
              value={noteTag}
              onChange={handleChangeTag}
            ></input>
            <textarea
              placeholder="Write your thought..."
              value={noteText}
              onChange={handleChangeText}
            ></textarea>
            <div className="note-footer">
              <small>{characterLimit - noteText.length} Remaining</small>
              <button className="add" onClick={handleAddClick}>
                Add
              </button>
            </div>
          </div>
        </>
      )}
      <RiAddCircleFill
        fill="#67d7cc"
        size="5rem"
        className="circle"
        style={{
          cursor: "pointer",
          position: "fixed",
          bottom: "20px",
          right: "50",
        }}
        onClick={() => setShow((prev) => !prev)}
      />
    </>
  );
};

export default AddNote;
