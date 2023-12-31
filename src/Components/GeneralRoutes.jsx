import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingRouting from './Landing/LandingRouting'
import AuthRouting from './Authentification/AuthRouting'
import UserHomeRouting from './User/UserHomeRouting'

const GeneralRoutes = () => {

    return(
        <div> 
        <Routes>
            {/* Landing */}
            <Route path="/*" element={<LandingRouting/>}/>

            {/* main routes */}
            <Route path="get-started/*" element={<AuthRouting/>}/>

            {/* default route */}
            <Route path="user/*" element={<UserHomeRouting/>}/>
            
        </Routes>
        </div>

    )
}

export default GeneralRoutes