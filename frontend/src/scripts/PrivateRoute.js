// ParentComponent.js
import React from 'react';
import { ModuleDropdown, ProjectDropdown } from '../dropDown.js';  // Assuming both are exported from the same file

const ParentComponent = ({ modulesData, onSelectModule, selectedModuleIndex, projectsData, onSelectProject }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ModuleDropdown 
                modulesData={modulesData} 
                onSelect={onSelectModule}
            />
            {selectedModuleIndex !== null && (
                <ProjectDropdown
                    projectsData={projectsData}
                    onSelect={onSelectProject}
                />
            )}
        </div>
    );
};

export default ParentComponent;
