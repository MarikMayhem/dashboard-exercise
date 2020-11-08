import './ProfileDropdown.scoped.scss'
import femaleAvatar from '../../../assets/images/female-avatar.png'

import React from 'react'

export default function ProfileDropdown() {
    return (

        <div className="profile-menu-wrapper">
            <input id="menu-toggle" type="checkbox" />
            <label id="menu-label" htmlFor="menu-toggle">
                <img id="menu-icon" src={femaleAvatar} alt="avatar" height="40" width="40" />
            </label>
            <ul id="collapsable-menu">
                <li className="collapsable-item">First item</li>
                <li className="collapsable-item">Second item</li>
                <li className="collapsable-item">Third item</li>
            </ul>
        </div>
    )
}
