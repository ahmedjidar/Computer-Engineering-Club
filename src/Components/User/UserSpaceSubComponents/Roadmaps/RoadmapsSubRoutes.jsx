import React from "react";
import { Routes, Route } from "react-router-dom";
import Rdmp1 from "./Rdmp1";
import Roadmaps from "./Roadmaps";
import Programming from "./RoadmapsDetails/Programming"
import Algo from "./RoadmapsDetails/Algo"
import Archi from "./RoadmapsDetails/Archi"
import Cloud from "./RoadmapsDetails/Cloud"
import Database from "./RoadmapsDetails/Database"
import DevOps from "./RoadmapsDetails/DevOps"
import Mobile from "./RoadmapsDetails/Mobile"
import WebDev from "./RoadmapsDetails/WebDev"








const RoadmapsSubRoutes = () => {

    return(
        <Routes>
            <Route index path="/" element={<Roadmaps/>}/>
            <Route path="/programming" element={<Programming/>}/>
            <Route path="/webdev" element={<WebDev/>}/>
            <Route path="/mobile" element={<Mobile/>}/>
            <Route path="/data" element={<Database/>}/>
            <Route path="/cloud" element={<Cloud/>}/>
            <Route path="/devops" element={<DevOps/>}/>
            <Route path="/archi" element={<Archi/>}/>
            <Route path="/algo" element={<Algo/>}/>
            
            {/* <Route path="/rdmp2" element={<Rdmp2/>}/>
            <Route path="/rdmp3" element={<Rdmp3/>}/> */}
            {/* add more paths for different roadmaps assi khalil */}
        </Routes>
    )
}

export default RoadmapsSubRoutes;