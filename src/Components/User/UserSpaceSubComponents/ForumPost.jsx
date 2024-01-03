// Post.js

import React, { useState } from 'react';
import '../../../assets/styles/forum.css' // Import the CSS file for Post styling
import gi from '../../../assets/Images/gi.png';

const ForumPost = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleViewMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='PostContainer'>
      <div className='LeftSection'>
      <img src={gi} alt={`${post.user}'s profile`} className='UserProfilePic' /> 
        <div className='PostInfo'>
            <div className='PostTitle'>{post.title}</div>
            <div className='PostDescription'>{post.description}</div>
            
        </div>
        
      </div>

      
      <div className='RightSection'>
       
        <div className='UserInfo'>
          <span className='UserName'>{post.user}</span>
        </div>
        <div className='Views'>{post.views} views</div>
        <div className='Timestamp'>{post.timestamp}</div>
      </div>
      
    </div>
  );
};

export default ForumPost;
