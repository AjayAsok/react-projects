import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Activity, Contact, Email, Phone } from "./MainDisplay"

export const Router = () => {
    return (
        <div>
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