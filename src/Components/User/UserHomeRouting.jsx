<<<<<<< HEAD
=======
import {React, useState} from "react";
>>>>>>> 635f9a06448d991105886ad63ac22e21ccc7fa28
import { Routes, Route } from "react-router-dom";
import UserSpaceLayout from "./UserSpaceLayout";
import HeadNav from "../Common/HeadNav";
import Explore from "./UserSpaceSubComponents/Explore";

const UserHomeRouting = () => {
    return(
        <div>
            <HeadNav/>
            <Routes>
                <Route index path="/myspace/*" element={<UserSpaceLayout/>}/>
                <Route path="/*" element={<Explore/>}/>
            </Routes>  
        </div>
    )
}

export default UserHomeRouting;