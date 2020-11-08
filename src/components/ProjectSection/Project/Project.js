import React from 'react';
import avatar from '../../../assets/images/user-avatar.jpg';
import { ReactComponent as Lock } from '../../../assets/images/icons/lock.svg';
import { ReactComponent as ReplyArrow } from '../../../assets/images/icons/reply-arrow.svg';


import './Project.scss';

export default function Project(props) {
    const { projectName, createdBy, company, description, type, time } = props;
    return (
        <section className="project">
            <div className="project-heading">
                <h2 className="project-title">{projectName} <span className="greyed-out">--- {company}</span></h2>
                <p className="blued-out">{type}</p>
            </div>
            <div className="project-information">
                <ReplyArrow className='project-icon project-icon-light icon' />
                <img className="user-avatar" src={avatar} alt="avatar" height="30" width="30" />
                <p className="project-description">
                    <b>{createdBy}</b> <span className="greyed-out" >description:</span> <span title={description} className="blued-out">{description}</span>
                </p>
                <p className={'greyed-out project-date'}>{time}</p>
                <Lock className='project-icon icon' />
            </div>
        </section>
    )
}
