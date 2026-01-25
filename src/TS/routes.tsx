//store routing information for the website

import { Routes, Route } from "react-router-dom"; 

//page imports
import Home from "./main_pages/home.tsx";
import Projects from "./main_pages/projects.tsx";
import About from "./main_pages/about.tsx";

//all page routes are store here
function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
        </Routes>
    )
}

export default Routing;