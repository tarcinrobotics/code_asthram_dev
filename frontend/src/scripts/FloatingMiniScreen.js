import React, { useState } from 'react';
import './FloatingMiniScreen.css'; // Ensure CSS is properly set up for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const FloatingScreen = ({ isVisible, toggleVisibility, content, hints }) => {
  const [view, setView] = useState('image'); // Initialize view to 'image'

  if (!isVisible) return null;

  return (
    <div className="floating-screen">
      {/* Toggle between image and hints */}
      <button onClick={() => setView(view === 'image' ? 'hints' : 'image')} className="toggle-view-button">
        <i className={`fas ${view === 'image' ? 'fa-lightbulb' : 'fa-image'}`}></i>
      </button>

      <button onClick={toggleVisibility} className="close-button">
        <i className="fas fa-times"></i>
      </button>

      {/* Conditionally render content based on 'view' */}
      {view === 'image' ? (
        <div>{content}</div>
      ) : (
        <div className="project-hints">
          {hints.map((hint, index) => (
            <p key={index}>{hint}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default FloatingScreen;