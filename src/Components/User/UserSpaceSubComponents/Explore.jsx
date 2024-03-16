import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyCourses, CommunityForum } from '../index';
import RoadmapsSubRoutes from "./Roadmaps/RoadmapsSubRoutes";
import CourseDetailsComponent from "./Courses&Related/CourseDetailsComponent";
import AdminSpaceLayout from "./AdminSpaceLayout";
import { useDataContext } from "../../../utils/useContext";


const Explore = () => {
 const { getPosts, getUser } = useDataContext();
//   const [user, setUser] = useState();
     console.log("start in feed section");
    const [postData,setPostData]=useState(false)
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(true);

    useEffect(() => {
    const userId = window.localStorage.getItem('userId')
          
    console.log('start in portfolio with useiD is ',userId)
    const fetchUser = async () => {
      setLoading(true);
      const userr = await getUser(userId);
    //   setUser(userr);
        setLoading(false);
        setActive(userr.active)
    console.log('userr ',userr)
    // console.log('user ',user)

    };
    if (userId) {
    fetchUser();
    }

     
    
    //======
  
   
   
         
        
        

       
       
        
    }, [])
    useEffect(() => {
         if(!active){setLoading(false)}
        if (active) {
    //         setLoading(true);
    //          const fetchPost = async () => {
    //         const p = await getPosts();
    //         const filteredPosts = p.filter(post => post.public === true);
    //         console.log("posts in getposts then", p);
    //         setPostData(filteredPosts);
    //          setLoading(false)   
    //     }
    //     fetchPost()
    //   .then(() => setLoading(false))
    //   .catch(() => {
    //   });
           syncPosts();
        console.log("posts in feed section", postData)
        
        }
        
    },[active])
    console.log('active',active)
    const syncPosts = async () => {
        console.log("in sync post feed section out",Math.random());
        setLoading(true)
        getPosts().then(postts => {
            console.log("in sync post feed section in", Math.random());
           const filteredPosts = postts.filter(post => post.public === true && post.forum === true);
           setPostData(filteredPosts);
       
            console.log("new posts:", postData);
              setLoading(false)
        }).catch(err => {
            console.log(err)
        })
              setLoading(false)
       
    }
    return(
        <div>
            <Routes>
                {/* headnav explorer routes */}
                <Route path="/courses" element={<MyCourses/>}/>
                <Route path="/courses/:id" element={<CourseDetailsComponent/>}/>
                <Route path="/roadmaps/*" element={<RoadmapsSubRoutes/>}/>
                <Route path="/forum" element={<CommunityForum active={active} loading={loading} postData={postData} syncPosts={syncPosts} />}/>
            </Routes>
        </div>
    )
}

export default Explore;