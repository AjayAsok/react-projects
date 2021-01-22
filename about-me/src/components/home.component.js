import { Outlet, Route, Routes } from "react-router"
import { Link } from "react-router-dom"

export const AboutMe = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="activity">Activity</Link>
            <Link to="contact">Contact</Link>
            <Link to="contact/phone">Phone</Link>
            <Link to="contact/email">Email</Link>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/activity" element={<Activity />}></Route>
                <Route path="/contact" element={<Contact />}>
                    <Route path="/email" element={<Email />}></Route>
                    <Route path="/phone" element={<Phone />}></Route>
                </Route>
            </Routes>
        </div>

    )
}

export const Home = () => {
    return <h1>This is Home</h1>
}

export const Activity = () => {
    return <h1>This is Activity</h1>
}

export const Contact = () => {
    return <> <h1>This is Contact</h1> <Outlet /> </>
}
export const Email = () => {
    return <h1>This is Email</h1>
}
export const Phone = () => {
    return <h1>This is Phone</h1>
}