import { Outlet } from "react-router"

import '../App.css';
import { Router } from "./Router";

import { SideNav } from "./SideNav";

export const AboutMe = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-light bg-light">
                <p className="navbar-brand">Menu needs to be defined</p>
            </nav> */}
            <SideNav />
            <Router />
        </div>

    )
}

export const Email = () => {
    return <h1>This is Email</h1>
}
export const Phone = () => {
    return <h1>This is Phone</h1>
}