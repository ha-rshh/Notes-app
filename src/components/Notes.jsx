import { useState } from "react";

const Notes = () => {
  const time = new Date();
  return (
    <div className="notes">
      <div className="notes-container">
        <h3 className="notes-title"></h3>
        <h4 className="notes-description"></h4>
        <div className="notes-footer">
          <div className="buttons">
            <button>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <span className="time">{`${time.getHours()}:${time.getMinutes()}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Notes;
