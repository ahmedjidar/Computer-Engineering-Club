import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyBlogs, CommunityFeed, UserFeedback, Portfolio, Calendar, Progress, Settings, Home, MyCourses, CommunityForum } from '../index';
import SavedPosts from "./HomeSection/savedPosts";
import OwnPosts from "./HomeSection/ownPosts";

const UserSubRoutes = () => {
  useEffect(() => {
    // dispatch(fetchPosts());
  }, [])
    return(
        <div>
            <Routes>
                {/* sidebar routes */}
                <Route index path="/" element={<Home   />}/>
                <Route path="/myblogs" element={<MyBlogs/>}/>
                <Route path="/globalfeed" element={<CommunityFeed  />}/>
                <Route path="/savedPosts" element={<SavedPosts  />}/>
                <Route path="/ownPosts" element={<OwnPosts  />}/>
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