import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Landing/LandingSections/Home'
import About from '../Landing/LandingSections/About'
import Services from '../Landing/LandingSections/Services'

const LandingRouting = () => {

    return(
        <div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/basic-information" element={<About/>}/>
            <Route path="/profile-setup" element={<Services/>}/>
        </Routes>
        <p>Landing Routes</p>
        </div>
    )
}

export default LandingRouting;