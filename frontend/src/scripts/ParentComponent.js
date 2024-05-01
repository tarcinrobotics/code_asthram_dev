// ParentComponent.js
import React from 'react';
import { ModuleDropdown, ProjectDropdown } from '../dropDown.js'; // Import the dropdowns

const ParentComponent = ({ modulesData, projectsData, onSelectModule, onSelectProject }) => {
    return (
        <div className="dropdown-container">
            <ModuleDropdown modulesData={modulesData} onSelect={onSelectModule} />
            <ProjectDropdown projectsData={projectsData} onSelect={onSelectProject} />
        </div>
    );
};

export default ParentComponent;
