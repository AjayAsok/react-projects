import { Outlet } from "react-router"

import '../App.css';
import { Router } from "./Router";

import { SideNav } from "./SideNav";

export const AboutMe = () => {
    return (
        <div className="row">
            {/* <nav className="navbar navbar-light bg-light">
                <p className="navbar-brand">Menu needs to be defined</p>
            </nav> */}
            <div className="col-3"><SideNav /></div>
            <div className="col-8"><Router /></div>
        </div>

    )
}