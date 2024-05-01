import React, { useState } from 'react';
import './dropDown.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ModuleDropdown = ({ modulesData, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    onSelect(index);
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-select" onClick={() => setIsOpen(!isOpen)}>
        {selectedIndex !== null ? modulesData[selectedIndex].name : "Select a module"}
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>
      {isOpen && (
        <div className="dropdown-options">
          {modulesData.map((module, index) => (
            <div key={index} className="dropdown-option" onClick={() => handleSelect(index)}>
              {module.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDropdown = ({ projectsData, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    if (projectsData && index >= 0 && index < projectsData.length) {
      onSelect(projectsData[index]);  // Now passing the entire project object
      setSelectedIndex(index);
    }
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-select" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown-select-text">
          {selectedIndex != null && projectsData && selectedIndex < projectsData.length 
           ? projectsData[selectedIndex].name 
           : "Select a project"}
        </span>
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>
      {isOpen && (
        <div className="dropdown-options">
          {projectsData.map((project, index) => (
            <div key={index} className="dropdown-option" onClick={() => handleSelect(index)}>
              {project.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { ModuleDropdown, ProjectDropdown };
