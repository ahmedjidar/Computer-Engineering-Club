// Forum.js

import React, { useEffect, useState } from 'react';
import '../../../assets/styles/forum.css'; // Import the CSS file for Forum styling
import ForumPost from './ForumPost'; // Import the ForumPost component
import ForumPostCreation from './forumPostCreation';
import ForumFullPost from './forumFullPost';
import PostLoader from '../../Common/Loaders/postLoader';

const CommunityForum = ({active,postData,loading,syncPosts}) => {
  console.log('in comunity  forum', postData);
    const [postCreated, setPostCreated] = useState(false);
  useEffect(() => {
   setTimeout(() => {
     setPostCreated(false);
   }, 3000);
  }, [postCreated]);
  
  return (
    <div className='min-h-screen flex justify-center bg-[#091b28]'>
      <div className='w-[100%] sm:w-[90%] md:w-[70%] lg:w-[60%]'>
              {active?<> 
        <div className="flex flex-col gap-2">
            <ForumPostCreation syncPosts={syncPosts} setPostCreated={setPostCreated} />
      {postCreated&&<p className='text-white text-center'>your post has been sent to  the community for review.</p>}
        {!loading&&postData ?<div  className="flex flex-col gap-0 ">
        
            {postData.slice().reverse().map((post) => {
                return (
                    <ForumFullPost key={post._id} postt={post} syncPosts={syncPosts} />)
    
            })}
            </div>:<PostLoader/>}
            </div></>
                : <p className="p-[100px] font-semibold"> you are not accepted yet wait until we will accept your join request ,after checking your informations</p>}
      </div>
    </div>
  );
};

export default CommunityForum;
