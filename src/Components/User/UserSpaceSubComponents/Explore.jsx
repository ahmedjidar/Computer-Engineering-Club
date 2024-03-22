import React, { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { MyCourses, CommunityForum } from '../index';
import RoadmapsSubRoutes from "./Roadmaps/RoadmapsSubRoutes";
import CourseDetailsComponent from "./Courses&Related/CourseDetailsComponent";
import AdminSpaceLayout from "./AdminSpaceLayout";
import { useDataContext } from "../../../utils/useContext";


const Explore = () => {

    
    return(
        <div>
            <Routes>
                {/* headnav explorer routes */}
                <Route path="/courses" element={<MyCourses/>}/>
                <Route path="/courses/:id" element={<CourseDetailsComponent/>}/>
                <Route path="/roadmaps/*" element={<RoadmapsSubRoutes/>}/>
                <Route path="/forum" element={<CommunityForum />}/>
            </Routes>
        </div>
    )
}

export default Explore;