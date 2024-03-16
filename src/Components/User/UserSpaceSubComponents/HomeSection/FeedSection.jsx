import React, { useEffect, useState } from "react";
import FullPost from "../BlogPostElements/FullPost";
import { useDataContext } from "../../../../utils/useContext";
import { fetchPosts } from "../../../../StoreN/blogSlice";
import PostCreation from "./PostCreation";
import PostLoader from "../../../Common/Loaders/postLoader";

const FeedSection = () => {
    const {getPosts,getUser} =useDataContext();
     console.log("start in feed section");
    const A = window.localStorage.getItem("A") === 'true';
    const [postData,setPostData]=useState(false)
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(true);
    const [postCreated, setPostCreated] = useState(false);

  useEffect(() => {
   setTimeout(() => {
     setPostCreated(false);
   }, 3000);
  }, [postCreated]);
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
           const filteredPosts = postts.filter(post => post.public === true && post.forum === false);
           setPostData(filteredPosts);
       
            console.log("new posts:", postData);
              setLoading(false)
        }).catch(err => {
            console.log(err)
        })
              setLoading(false)
       
    }
    return (
        <div>
              {active?<> 
        <div className="flex flex-col gap-2">
           <PostCreation syncPosts={syncPosts} setPostCreated={setPostCreated}/>
        {postCreated&&<p className="text-center">your post has been sent to  the community for review.</p>}
        {!loading&&postData ?<div  className="flex flex-col gap-0 ">
        
            {postData.slice().reverse().map((post) => {
                return (
                    <FullPost key={post._id} postt={post} syncPosts={syncPosts} />)
    
            })}
            </div>:<PostLoader/>}
            </div></>
                : <p className="p-[100px] font-semibold"> you are not accepted yet wait until we will accept your join request ,after checking your informations</p>}
            </div>
    )
}

export default FeedSection;