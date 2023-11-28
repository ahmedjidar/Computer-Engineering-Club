import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Activities ,Team} from "./index";

const LandingRouting = () => {

    return(
        <div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/activities" element={<Activities/>}/>
            <Route path="/team" element={<Team/>}/>
        </Routes>
        </div>
    )
}

export default LandingRouting;