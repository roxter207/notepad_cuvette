import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="add"
        >
          Toggle
        </button>
      </div>
      <hr></hr>
    </>
  );
};
export default Header;
