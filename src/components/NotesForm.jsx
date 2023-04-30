import { React, useState } from "react";

export default const NotesForm = () => {
  const [note, setNote] = useState("");
  const [description, setDescriptions] = useState("");

  const [notes, setNotes] = useState([]);
  const [descriptions, setDescription] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note !== "" || description !== "" || !/^\s*$/.test(note)) {
      setNotes([
        {
          id: `${Math.round(Math.random() * 1000)}`,
          note,
          description,
        },
        ...notes,
        ...descriptions,
      ]);
      setDescription("");
      setNote("");
    }

    return (
      <div className="form-container">
        <form className="notes-form" onSubmit={handleSubmit}>
          <label htmlFor="notes">Title</label>
          <input type="text" name="notes" className="notes" value={note} />
          <label htmlFor="note-description">Describe your note</label>
          <input
            type="text"
            name="note-description"
            className="note-description"
            value={setDescription}
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    );
  }};

