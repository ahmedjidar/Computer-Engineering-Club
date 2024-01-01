import { Routes, Route } from "react-router-dom";
import { UserSpaceLayout } from ".";

const UserHomeRouting = () => {

    return(
        <div>
            <Routes>
                <Route path="/myspace" element={<UserSpaceLayout/>}/>
            </Routes>  
        </div>
    )
}

export default UserHomeRouting;