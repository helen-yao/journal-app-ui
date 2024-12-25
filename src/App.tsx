import React from "react";
import { useState } from "react";

import "./App.css";

type Journal = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "test note 1",
      content: "bla bla note1",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", title);
    console.log("content: ", content);
    setNotes([newEntry, ...notes]);
    setTitle("");
    setContent(""); 
  };
  const newEntry: Journal = {
    id: notes.length + 1,
    title: title,
    content: content,
  };

  
  return (
    <div>
      <header>Write down your thoughts for the day!</header>
      <div className="app-container">
        <form className="journal-form" onSubmit={handleAddNote}>
          <input
            placeholder="Title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Content"
            rows={10}
            required
          />

          <button type="submit">Submit</button>

        </form>
        
        <div>
          <div className="journal-grid">
            {notes.map((note) => (
              <div className="journal-item">
                <div className="journal-header">
                  <button>x</button>
                </div>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </div>
            ))}
          </div>

          <div className="rating">
            <h2>Rate:</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
