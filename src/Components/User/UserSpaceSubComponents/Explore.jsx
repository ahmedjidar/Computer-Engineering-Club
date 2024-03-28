import React, { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { MyCourses, CommunityForum } from '../index';
import RoadmapsSubRoutes from "./Roadmaps/RoadmapsSubRoutes";
import CourseDetailsComponent from "./Courses&Related/CourseDetailsComponent";
import AdminSpaceLayout from "./AdminSpaceLayout";
import { useDataContext } from "../../../utils/useContext";
import SavedForum from "./savedForum";
import OwnForum from "./ownForum";


const Explore = () => {

    
    return(
        <div>
            <Routes>
                {/* headnav explorer routes */}
                <Route path="/courses" element={<MyCourses/>}/>
                <Route path="/courses/:id" element={<CourseDetailsComponent/>}/>
                <Route path="/roadmaps/*" element={<RoadmapsSubRoutes/>}/>
                <Route path="/forum" element={<CommunityForum />}/>
                <Route path="/forum/saved" element={<SavedForum />}/>
                <Route path="/forum/own" element={<OwnForum />}/>
            </Routes>
        </div>
    )
}

export default Explore;