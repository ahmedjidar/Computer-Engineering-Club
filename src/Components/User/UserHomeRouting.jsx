import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserSpaceLayout } from ".";

const UserHomeRouting = () => {

    return(
        <div>
            <Routes>
                <Route path="/myspace" element={<UserSpaceLayout/>}/>
            </Routes>  
            UserHome
        </div>
    )
}

export default UserHomeRouting;