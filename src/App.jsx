import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      setNotes([
        {
          id: `${Math.round(Math.random() * 1000)}`,
          title,
          description,
        },
        ...notes,
      ]);
      setTitle("");
      setDescription("");
      return;
    }
  };

  return (
    <div>
      <Header />
      <div className="note-container">
        {notes.map((item) => (
          <div className="note-box" key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <div className="note-box">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="note-title"
              type="text"
              placeholder="Title"
              name="description"
              autoComplete="off"
            />
            <textarea
              className="note-desc"
              rows={6}
              placeholder="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}

            />
            <button type="submit" className="add-note-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
