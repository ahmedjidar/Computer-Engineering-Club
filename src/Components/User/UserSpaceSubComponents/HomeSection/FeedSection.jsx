import React, { useEffect, useState } from "react";
import FullPost from "../BlogPostElements/FullPost";
import { useDataContext } from "../../../../utils/useContext";
import { fetchPosts } from "../../../../StoreN/blogSlice";
import PostCreation from "./PostCreation";
import PostLoader from "../../../Common/Loaders/postLoader";

const FeedSection = () => {
    const {getPosts,auth} =useDataContext();
     console.log("start in feed section");
    const A = window.localStorage.getItem("A") === 'true';
    const [postData,setPostData]=useState(false)
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(A);
    console.log(A)
    useEffect(() => {
        if(!active){setLoading(false)}
        if (active) {
            setActive(true);
             const fetchPost = async () => {
            setLoading(true)
            const p = await getPosts();
            const filteredPosts = p.filter(post => post.public === true);
            console.log("posts in getposts then", p);
            setPostData(filteredPosts);
        
        }
        fetchPost()
      .then(() => setLoading(false))
      .catch(() => {
      });
        console.log("posts in feed section", postData)
        
        }
        
       
        
    },[])
    const syncPosts = async () => {
        console.log("in sync post feed section out",Math.random());
        setLoading(true)
        getPosts().then(postts => {
            console.log("in sync post feed section in", Math.random());
            setPostData(postts)
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
           <PostCreation syncPosts={syncPosts}/>
        
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