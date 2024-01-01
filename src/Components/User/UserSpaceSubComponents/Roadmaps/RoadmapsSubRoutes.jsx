import React from "react";
import { Routes, Route } from "react-router-dom";
import Rdmp1 from "./Rdmp1";
import Roadmaps from "./Roadmaps";

const RoadmapsSubRoutes = () => {

    return(
        <Routes>
            <Route index path="/" element={<Roadmaps/>}/>
            <Route path="/rdmp1" element={<Rdmp1/>}/>
            {/* <Route path="/rdmp2" element={<Rdmp2/>}/>
            <Route path="/rdmp3" element={<Rdmp3/>}/> */}
            {/* add more paths for different roadmaps assi khalil */}
        </Routes>
    )
}

export default RoadmapsSubRoutes;