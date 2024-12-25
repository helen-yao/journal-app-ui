import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <body>
    <div className="app-container">
      <form className="journal-form">
      <input placeholder="Title" required />
        <textarea placeholder="Content" rows={10} required />

        <button type="submit">Submit</button>
        
      </form>
      
    <div className="journal-grid">
        <div className="journal-item">
          <div className="journal-header">
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>

        <div className="journal-item">
          <div className="journal-header">
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>

        <div className="journal-item">
          <div className="journal-header">
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>
        
        <div className="journal-item">
          <div className="journal-header">
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>

      </div>
    </div>
    </body>
    
  );
}

export default App;
