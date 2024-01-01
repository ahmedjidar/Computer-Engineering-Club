import React from "react";
import { Routes, Route } from "react-router-dom";
import {MyBlogs, CommunityFeed, UserFeedback, Portfolio, Calendar, Progress, Settings, Home, MyCourses, CommunityForum} from '../index';

const UserSubRoutes = () => {

    return(
        <div>
            <Routes>
                {/* sidebar routes */}
                <Route index path="/" element={<Home/>}/>
                <Route path="/myblogs" element={<MyBlogs/>}/>
                <Route path="/globalfeed" element={<CommunityFeed/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/myprogress" element={<Progress/>}/>
                <Route path="/feedback" element={<UserFeedback/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </div>
    )
}

export default UserSubRoutes;