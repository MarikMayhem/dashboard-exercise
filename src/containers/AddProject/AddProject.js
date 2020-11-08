import React, { useState } from 'react'
import './AddProject.scoped.scss'

export default function AddProject(props) {

    const [inputState, setInputState] = useState({
        projectName: "",
        createdBy: "",
        company: "",
        description: "",
        type: "Opened",
        projectNameError: "",
        createdByError: "",
        companyError: "",
        descriptionError: "",
    })

    const handleInput = (e) => {
        let inputName = e.target.name;
        setInputState(oldstate => ({ ...oldstate, [inputName]: e.target.value }))
    }
    const validateInput = (e) => {
        e.preventDefault()
        let projectNameError = "";
        let createdByError = "";
        let companyError = "";
        let descriptionError = "";

        if (inputState.projectName.length < 5 || inputState.projectName.length > 15) {
            projectNameError = "Invalid length: min 5, max 15"
        }
        if (inputState.createdBy.length < 5 || inputState.createdBy.length > 10) {
            createdByError = "Invalid length: min 5, max 10"
        }
        if (!inputState.company.length || inputState.company.length > 10) {
            companyError = "Invalid length: min 1, max 10"
        }
        if (inputState.description.length < 10 || inputState.description.length > 30) {
            descriptionError = "Invalid length: min 10, max 30"
        }
        if (projectNameError || createdByError || companyError || descriptionError) {
            setInputState(oldstate => ({ ...oldstate, projectNameError, createdByError, companyError, descriptionError }))
            return false
        } else {
            let { projectName, createdBy, company, description, type } = inputState;
            let validatedProject = { projectName, createdBy, company, description, type }
            props.submitProject(validatedProject)
            setInputState(oldstate => ({ ...oldstate, projectNameError, createdByError, companyError, descriptionError }))
        }
        return true
    }

    return (
        <React.Fragment>
            <h2>Create a new project</h2>
            <form className="project-form" onSubmit={(e) => validateInput(e)} action="submit">
                <input placeholder="Project Name" type="text" name="projectName" value={inputState.projectName} onChange={handleInput} />
                <div className="input-error">{inputState.projectNameError}</div>
                <input placeholder="Created By" type="text" name="createdBy" value={inputState.createdBy} onChange={handleInput} />
                <div className="input-error">{inputState.createdByError}</div>
                <input placeholder="Company" type="text" name="company" value={inputState.company} onChange={handleInput} />
                <div className="input-error">{inputState.companyError}</div>
                <textarea placeholder="Description" name="description" value={inputState.description} onChange={handleInput} />
                <div className="input-error">{inputState.descriptionError}</div>

                <select name="type" onChange={handleInput} >
                    <option value="Opened">Opened</option>
                    <option value="In progress">In progress</option>
                    <option value="Ready for review">Ready for review</option>
                    <option value="Closed">Closed</option>
                </select>
                <input type="submit" value="Submit" className="submit" />

            </form>
        </React.Fragment>
    )
}
