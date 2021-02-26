// import { Outlet } from "react-router"

import '../App.css';
import { RightNav } from './RightNav';
import { Router } from "./Router";

import { SideNav } from "./SideNav";

export const AboutMe = () => {
    return (
        <div className="row">
            <div className="col-1" style={{ zIndex: 1000 }}>
                <SideNav />
            </div>
            <div className="col-10">
                <Router />
            </div>
            <div className="col-1">
                <RightNav />
            </div>
        </div>

    )
}