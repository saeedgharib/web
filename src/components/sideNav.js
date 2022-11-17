import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/SideBar.css';

function SideBar() {
const [sideNavItems, setsideNavItems] = useState( [
    {
        display: 'Dashoard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Add User',
        icon: <i className='bx bx-receipt'></i>,
        to: '/Register',
        section: 'Register'
    },
    {
        display: 'Misc',
        icon: <i className='bx bx-star'></i>,
        to: '/Misc',
        section: 'misc'
    },
    {
        display: 'Users',
        icon: <i className='bx bx-user-circle'></i>,
        to: '/Users',
        section: 'user'
    },
    {
        display: 'Settings',
        icon: <i className='bx bx-user'></i>,
        to: '/Settings',
        section: 'settings'
    },
    {
        display: 'Delete',
        icon: <i className='bx bx-user'></i>,
        to: '/Std',
        section: 'Std'
    },
]);

    return(
    <>

    <div className='sidebar'>
        <div className="sidebar_logo">
            ANONCHAT
        </div>
        <div className="sidebar_menu">
           
            {
                sideNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar_menu_item `}>
                            <div className="sidebar_menu_item_icon">
                                {item.icon}
                            </div>
                            <div className="sidebar_menu_item_text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
    </>
    );
}

export default SideBar;