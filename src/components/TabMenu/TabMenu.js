import React from 'react'
import Tab from '../TabMenu/Tab/Tab'
import { ReactComponent as Gear } from '../../assets/images/icons/gear.svg';
import { ReactComponent as Burger } from '../../assets/images/icons/burger-icon.svg';
import './TabMenu.scss'

const TabMenu = React.memo((props) => {
    const tabTypes = ['All', 'Opened', 'In progress', 'Ready for review', 'Closed']

    return (
        <section className="tab-menu">
            <ul>
                {tabTypes.map((type, idx) => <Tab key={idx} getTabData={() => props.getTabData(type)} type={type} />)}
            </ul>
            <div>
                <Burger className="tab-icon icon" />
                <Gear className="tab-icon icon" />
            </div>
        </section>
    )
});

export default TabMenu
