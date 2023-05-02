
import "./App.css";
import Header from "./components/Header";

import Notes from "./components/Notes";
export default function App() {
  
  
  
  return (
    <div>
      <Header />
      <div className="form-container">
        <form className="notes-form">
          <label htmlFor="notes">Title</label>
          <input type="text" name="notes" className="notes"  />
          <label htmlFor="note-description">Describe your note</label>
          <input
            type="text"
            name="note-description"
            className="note-description"
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
      <Notes />
    </div>
  );
}
