import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [pen, setPen] = useState(false);
  const [trash, setTrash] = useState(false);

  // const handleMouseOver = () => {
  //   setActive(true);
  // };
  // const handleMouseOut = () => {
  //   setActive(false);
  // };
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
            <p className="note-title">{item.title}</p>
            <p className="note-description">{item.description}</p>
            <div className="btn">
              <i
                className={
                  pen
                    ? "fa-sharp fa-solid fa-pen fa-shake"
                    : "fa-sharp fa-solid fa-pen"
                }
                onMouseOver={() => setPen(true)}
                onMouseOut={() => setPen(false)}
                style={{ color: "black" }}
              ></i>
              <i
                className={
                  trash
                    ? "fa-sharp fa-solid fa-trash fa-shake"
                    : "fa-sharp fa-solid fa-trash"
                }
                onMouseOver={() => setTrash(true)}
                onMouseOut={() => setTrash(false)}
                style={{ color: "red" }}
              ></i>
            </div>
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
              maxLength={20}
              required
            />
            <textarea
              className="note-desc"
              rows={6}
              placeholder="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
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
