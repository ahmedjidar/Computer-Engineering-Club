import React from "react";
import { Routes, Route } from "react-router-dom";
import { MyCourses, CommunityForum } from '../index';
import RoadmapsSubRoutes from "./Roadmaps/RoadmapsSubRoutes";
import CourseDetailsComponent from "./CourseDetailsComponent";

const Explore = () => {

    return(
        <div>
            <Routes>
                {/* headnav explorer routes */}
                <Route path="/courses" element={<MyCourses/>}/>
                <Route path="/courses/:id" element={<CourseDetailsComponent/>}/>
                <Route path="/roadmaps/*" element={<RoadmapsSubRoutes/>}/>
                <Route path="/forum" element={<CommunityForum/>}/>
            </Routes>
        </div>
    )
}

export default Explore;