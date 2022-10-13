import { MdDelete } from "react-icons/md";

const Note = ({ id, title, tagline, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{title}</span>
      <span>{tagline}</span>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDelete
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.5rem"
        />
      </div>
    </div>
  );
};

export default Note;
