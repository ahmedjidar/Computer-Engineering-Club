import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Activities ,Team} from "./index";
import ActivitiesSubRoutes from "./LandingSections/activities-sub-routes/ActivitiesSubRoutes";

const LandingRouting = () => {
    return(
        <div>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/activities/*" element={<ActivitiesSubRoutes/>}/>
            <Route path="/team" element={<Team/>}/>
        </Routes>
        </div>
    )
}

export default LandingRouting;