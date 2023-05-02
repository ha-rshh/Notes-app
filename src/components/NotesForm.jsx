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
   
    );
  }};

