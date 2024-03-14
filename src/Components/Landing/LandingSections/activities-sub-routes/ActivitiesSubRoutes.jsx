import React from "react";
import { Routes, Route } from "react-router-dom";
import Activities from "../Activities";
import Event1 from "./Event1";
import Event2 from "./Event2";
import Event3 from "./Event3";
import PrSolving1 from "./PrSolving1";
import PrSolving2 from "./PrSolving2";
import PrSolving3 from "./PrSolving3";

const ActivitiesSubRoutes = () => {

    return(
        <Routes>
            <Route index path="/" element={<Activities/>}/>
            <Route path="/Cs-Day1" element={<Event1/>}/>
            <Route path="/Cs-Day2" element={<Event2/>}/>
            <Route path="/Cs-Day3" element={<Event3/>}/>
            <Route path="/Pr-Solving1" element={<PrSolving1/>}/>
            <Route path="/Pr-Solving2" element={<PrSolving2/>}/>
            <Route path="/Pr-Solving3" element={<PrSolving3/>}/>

            {/* <Route path="/event2" element={<Event2/>}/> */}
        </Routes>
    )
}

export default ActivitiesSubRoutes;