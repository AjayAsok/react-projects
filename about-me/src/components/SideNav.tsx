import { Link } from "react-router-dom"
import image from "../assets/image.jpg";
export const SideNav = () => {
    return (
        <div className='col-md-2 d-none d-md-block bg-light sidebar'>
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/"><img className="img-thumbnail" width='100px' src={image} alt="IMG" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="employment">Employment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="skills">Skills</Link>
                    </li>
                </ul>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="education">Education and Certifications</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact/phone">Phone</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact/email">Email</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}