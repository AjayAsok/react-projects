import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Contact } from "./Contact";
import { Employment } from "./Employment";
import { Education } from "./Education";
import { Skills } from "./Skills";

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/employment" element={<Employment />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/education" element={<Education />}>
                </Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    )
}