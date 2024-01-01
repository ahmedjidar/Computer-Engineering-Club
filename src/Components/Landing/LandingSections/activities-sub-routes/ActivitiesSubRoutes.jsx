import React from "react";
import { Routes, Route } from "react-router-dom";
import Event1 from "./Event1";
import Activities from "../Activities";

const ActivitiesSubRoutes = () => {

    return(
        <Routes>
            <Route index path="/" element={<Activities/>}/>
            <Route path="/event1" element={<Event1/>}/>
            {/* <Route path="/event2" element={<Event2/>}/> */}
        </Routes>
    )
}

export default ActivitiesSubRoutes;