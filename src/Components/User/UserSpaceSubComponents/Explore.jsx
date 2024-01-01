import React from "react";
import { Routes, Route } from "react-router-dom";
import { MyCourses, CommunityForum } from '../index';

const Explore = () => {

    return(
        <div>
            <Routes>
                {/* headnav explorer routes */}
                <Route path="/courses" element={<MyCourses/>}/>
                <Route path="/forum" element={<CommunityForum/>}/>
            </Routes>
        </div>
    )
}

export default Explore;