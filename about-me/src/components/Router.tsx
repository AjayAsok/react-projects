import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Email, Phone } from "./MainDisplay"
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
                    <Route path="/email" element={<Email />}></Route>
                    <Route path="/phone" element={<Phone />}></Route>
                </Route>
            </Routes>
        </div>
    )
}