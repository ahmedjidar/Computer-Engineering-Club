import React from "react";
import { Routes, Route } from "react-router-dom";
import BasicProfileInformation from './BasicProfileInformation'
import OrganizationInformation from './OrganizationInformation'
import PreferencesAndNotifications from './PreferencesAndNotifications'
import Login from "./Login";

const AuthRouting = () => {
    return(
        <div> 
            <Routes>
                <Route index path="/profile-setup" element={<BasicProfileInformation/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/organization" element={<OrganizationInformation/>}/>
                <Route path="/preferences" element={<PreferencesAndNotifications/>}/> */}
            </Routes>
        </div>

    )
}

export default AuthRouting;