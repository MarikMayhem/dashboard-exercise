import React from 'react';
import { NavLink } from 'react-router-dom'
import ProfileDropdown from '../../UI/ProfileDropdown/ProfileDropdown'
import SearchInput from '../../../components/UI/SearchInput/SearchInput'
import { ReactComponent as Bell } from '../../../assets/images/icons/bell.svg';

import './Header.scss';

const Header = () => {

    return (
        <header className='header'>
            <ul>
                <li>
                    <NavLink to="/dashboard">
                        Dashboard
                </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        Projects
                </NavLink>
                </li>
                <li>
                    <NavLink to="/calendar">
                        Calendar
                </NavLink>
                </li>
                <li>
                    <NavLink to="/statuses">
                        Statuses
                </NavLink>
                </li>
                <li>
                    <NavLink to="/people">
                        People
                </NavLink>
                </li>
            </ul>
            <section className="header-right">
                <SearchInput />
                <div className="notification">
                    <Bell className="bell-icon icon" />
                </div>
                <ProfileDropdown />
            </section>
        </header>
    );
}


export default Header;
