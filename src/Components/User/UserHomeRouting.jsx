import {React, useState} from "react";
import { Routes, Route } from "react-router-dom";
import UserSpaceLayout from "./UserSpaceLayout";
import HeadNav from "../Common/HeadNav";
import Explore from "./UserSpaceSubComponents/Explore";
import AdminSpaceLayout from "./UserSpaceSubComponents/AdminSpaceLayout";
import AdminCheckPosts from "./UserSpaceSubComponents/AdminCheckPosts";
import AdminCheckUsers from "./UserSpaceSubComponents/AdminCheckUsers";
import AdminHome from "./UserSpaceSubComponents/AdminHome";
import UserSpaceProvider from "./securityProviders/UserSpaceProvider";
import AdminSpaceProvider from "./securityProviders/AdminSpaceProvider ";

const UserHomeRouting = () => {
    return(
        <div>
            <HeadNav/>
            <Routes>
                <Route index path="/" element={<UserSpaceLayout/>}/>
                <Route path="/myspace/*" element={<UserSpaceLayout/>}/>
                {/* <Route path="/admin-space/*" element={<AdminSpaceLayout/>} /> */}
                {/* <Route path="/admin-space/*" element={<AdminSpaceProvider><AdminSpaceLayout/></AdminSpaceProvider>}> */}
                <Route path="/admin-space/*" element={<AdminSpaceLayout/>}>
                    <Route index element={<AdminHome/>} />       
                     <Route path="check-posts" element={<AdminCheckPosts/>} />
                    <Route path="check-users" element={<AdminCheckUsers/>} />
                </Route>
                <Route path="/*" element={<Explore/>}/>
            </Routes>  
        </div>
    )
}

export default UserHomeRouting;