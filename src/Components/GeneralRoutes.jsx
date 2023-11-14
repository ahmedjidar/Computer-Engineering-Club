import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path="authentificate/*" element={<AuthRouting/>}/>

            {/* default route */}
            <Route path="user/*" element={<UserHomeRouting/>}/>
            
        </Routes>
            <p>General Route ^ </p><br/>
        </div>

    )
}

export default GeneralRoutes