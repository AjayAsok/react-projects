import { Link } from "react-router-dom"
import image from "../assets/image.jpg";

import styled from 'styled-components'

const SidebarParent = styled.div`
  background: #007bff;
  width: 30vh;
  height: 100vh;
  padding: 0;
  margin: 0;
`;
const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;
  

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  a {
      color: black;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #2fa98c;
    color: red;
  }
`;
export const SideNav = () => {
    return (
        <>
            <div className='col-md-2 d-none d-md-block bg-light sidebar'>
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
            </div>
        </>
    )
}