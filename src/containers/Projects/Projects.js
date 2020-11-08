import React, { useState, useEffect } from 'react';

import AddProject from '../AddProject/AddProject';
import Modal from '../../components/UI/Modal/Modal'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import TabMenu from '../../components/TabMenu/TabMenu'
import { connect } from 'react-redux'
import moment from 'moment';
import './Projects.scss'


const Projects = (props) => {

    const [stateProjects, setStateProjects] = useState([
        { projectName: 'Newsletter design', company: 'CP Global', createdBy: 'Matthew', description: 'I updated the files of this project', type: 'Opened', time: '4 hours ago' },
        { projectName: 'Website Redesign', company: 'Graham Co.', createdBy: 'Audrey', description: 'Already changed the description i will keep you updated!', type: 'Closed', time: '5 hours ago' },
        { projectName: 'Wireframes', company: 'Hoor Show', createdBy: 'Matthew', description: '@Audrey, I am still waiting for feedback. Can you please check all the files and put a new description', type: 'Closed', time: '3:29PM' },
    ])
    const [wordFilterType, setWordFilterType] = useState('');
    const [filterType, setFilterType] = useState('');
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        setWordFilterType(props.searchWord)
    }, [props.searchWord])


    const closeModalHandler = () => {
        setDisplayModal(false);
    };

    const submitProjectHandler = (project) => {
        setDisplayModal(false)
        let now = moment().valueOf()
        const newProject = { ...project, time: moment(now).fromNow() }
        setStateProjects((oldstate) => [...oldstate, newProject])
    }

    const filterByTypeHandler = (type) => {
        setFilterType(type)
    }

    let projects = <ProjectSection projects={stateProjects} />;
    let filteredProjects = stateProjects;

    if (wordFilterType) {
        filteredProjects = stateProjects.filter(state => {
            return state.projectName.toLowerCase()
                .includes(wordFilterType.toLowerCase())
        })
        projects = filteredProjects.length ?
            <ProjectSection projects={filteredProjects} /> :
            <h2>There are no Projects in this category</h2>
    }

    if (filterType.length) {
        if (filterType === 'All') {
            projects = <ProjectSection projects={filteredProjects} />
        } else {
            filteredProjects = filteredProjects.filter(project => project.type === filterType)
            projects = filteredProjects.length ?
                <ProjectSection projects={filteredProjects} /> :
                <h2>There are no Projects in this category</h2>
        }

    }

    return (
        <React.Fragment>
            <Modal show={displayModal} modalClosed={closeModalHandler}>
                <AddProject submitProject={submitProjectHandler} />
            </Modal>
            <main className="projects">
                <section className="projects-heading">
                    <h1>Projects</h1>
                    <button className="add-project-button" onClick={() => setDisplayModal(true)}>Add Project</button>
                </section>
                <TabMenu getTabData={filterByTypeHandler} />
                {projects}
            </main>
        </React.Fragment>

    );
}

const mapStateToProps = state => {
    return {
        searchWord: state.searchWord
    };
}

export default connect(mapStateToProps)(Projects);
