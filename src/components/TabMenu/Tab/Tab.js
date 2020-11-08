import React from 'react'
import './Tab.scoped.scss'

const Tab = React.memo((props) => {
    return (
        <li>
            <button className={`transparent-button ${props.type === 'All' ? 'active' : ""}`} onClick={(e) => {
                document.querySelectorAll('.transparent-button').forEach(el => el.classList.remove('active'));
                e.target.classList.add("active");
                return props.getTabData(props.type)
            }}>{props.type}</button>
        </li>
    )
})

export default Tab
