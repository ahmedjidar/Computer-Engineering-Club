import React, { useEffect, useState } from "react";
import FullPost from "../BlogPostElements/FullPost";
import { useSelector } from "react-redux";
import getPosts from "/src/utils/getPosts.js"

const FeedSection = ({posts}) => {
    let p = posts;
    
     const syncPosts = async() => {
    //  dispatch(fetchPosts());
     getPosts().then(posts => {
         p=posts
         console.log("new posts:", p);
      })

        console.log("synced",p)
       
}
    return(
        
        <div className="flex flex-col gap-0 ">
            
            {p.slice().reverse().map((post) => {
                return (
                    <FullPost key={post._id} postt={post} syncPosts={syncPosts} />)
           }) }
        </div>
    )
}

export default FeedSection;