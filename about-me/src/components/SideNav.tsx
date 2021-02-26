import { Link } from "react-router-dom"

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import "../App.css";

const sideBarData = [
    {
        title: "Home",
        path: '/',
        cName: 'nav-text'
    },
    {
        title: "Employment",
        path: '/employment',
        cName: 'nav-text'
    },
    {
        title: "Skills",
        path: '/skills',
        cName: 'nav-text'
    },
    {
        title: "Education",
        path: '/education',
        cName: 'nav-text'
    },

];

export const SideNav = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <MenuIcon onClick={showSideBar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li key='toggle' className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <CloseIcon />
                        </Link>
                    </li>
                    {sideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            {/* <div className='col-md-2 d-none d-md-block bg-light sidebar'>
                <div className="sidebar-sticky">
                    <SidebarParent className="nav flex-column">
                        <SidebarItem className="nav-item">
                            <Link className="nav-link active" to="/"><img className="img-thumbnail" width='100px' src={image} alt="IMG" /></Link>
                        </SidebarItem>
                        <SidebarItem className="nav-item">
                            <Link className="nav-link active" to="/">Home
                            </Link>
                        </SidebarItem>
                        <SidebarItem className="nav-item">
                            <Link to="employment">Employment</Link>
                        </SidebarItem>
                        <SidebarItem className="nav-item">
                            <Link to="skills">Skills</Link>
                        </SidebarItem>
                        <SidebarItem className="nav-item">
                            <Link to="education">Education and Certifications</Link>
                        </SidebarItem>
                    </SidebarParent>
                </div>
            </div> */}
        </>
    )
}