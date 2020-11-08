import React from 'react';
import Project from './Project/Project'

const ProjectSection = (props) => {
    return (
        <React.Fragment>
            {props.projects.map((project, idx) => {
                return <Project
                    key={idx}
                    projectName={project.projectName}
                    createdBy={project.createdBy}
                    description={project.description}
                    company={project.company}
                    type={project.type}
                    time={project.time} />
            })}
        </React.Fragment>
    );
}

export default ProjectSection;
