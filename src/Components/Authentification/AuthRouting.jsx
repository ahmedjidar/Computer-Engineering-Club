import React from "react";
import { Routes, Route } from "react-router-dom";
import BasicProfileInformation from './BasicProfileInformation'
import OrganizationInformation from './OrganizationInformation'
import PreferencesAndNotifications from './PreferencesAndNotifications'

const AuthRouting = () => {
    return(
        <div>
            <Routes>
                <Route index path="/basic" element={<BasicProfileInformation/>}/>
                <Route path="/organization" element={<OrganizationInformation/>}/>
                <Route path="/preferences" element={<PreferencesAndNotifications/>}/>
            </Routes>
            <p>Authentification Routes</p>
        </div>

    )
}

export default AuthRouting;