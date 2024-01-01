import React from "react";
import { useNavigate } from "react-router-dom";

const Roadmaps = () => {
    const navigator = useNavigate();

    return(
        <div>
            <button onClick={() => navigator('/user/roadmaps/rdmp1')}>Click To View Roadmap 1 (Test)</button>
        </div>
    )
}

export default Roadmaps;