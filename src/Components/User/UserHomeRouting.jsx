import {React, useState} from "react";
import { Routes, Route } from "react-router-dom";
import UserSpaceLayout from "./UserSpaceLayout";
import HeadNav from "../Common/HeadNav";
import Explore from "./UserSpaceSubComponents/Explore";

const UserHomeRouting = () => {
    return(
        <div>
            <HeadNav/>
            <Routes>
                <Route index path="/" element={<UserSpaceLayout/>}/>
                <Route path="/myspace/*" element={<UserSpaceLayout/>}/>
                <Route path="/*" element={<Explore/>}/>
            </Routes>  
        </div>
    )
}

export default UserHomeRouting;