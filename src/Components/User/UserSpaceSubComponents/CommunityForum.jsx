// Forum.js

import React, { useEffect, useState } from 'react';
import '../../../assets/styles/forum.css'; // Import the CSS file for Forum styling
import ForumPost from './ForumPost'; // Import the ForumPost component
import ForumPostCreation from './forumPostCreation';
import ForumFullPost from './forumFullPost';
import PostLoader from '../../Common/Loaders/postLoader';
import { Link, useSearchParams } from 'react-router-dom';
import { useDataContext } from '../../../utils/useContext';
import { postTypes } from '../../../Constants/postOptions';

const CommunityForum = () => {
  const { getPosts, getUser} = useDataContext();
const userId = window.localStorage.getItem("userId");
  console.log("start in feed section");
  const A = window.localStorage.getItem("A") === "true";
  const [postData, setPostData] = useState([]);
  const [showedData, setShowedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [postCreated, setPostCreated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [timePeriod, setTimePeriod] = useState("last_7_days");
  
  useEffect(() => {
    setTimeout(() => {
      setPostCreated(false);
    }, 3000);
  }, [postCreated]);


  
   useEffect(() => {
    if (searchText.length === 0) {
        setShowedData(postData);
    } else {
        const searchWords = searchText.toLowerCase().split(" ");
        const filteredData = postData.filter(post => {
            const postowner = post.postowner;
            return searchWords.every(word =>
                post.content.toLowerCase().includes(word) ||
              postowner.username.toLowerCase().includes(word) ||
              post.title.toLowerCase().includes(word)
            );
        });
        setShowedData(filteredData);
    }
}, [searchText]);

useEffect(() => {
  if (timePeriod === 'most_recent') {
    // If sorting by most recent, we already have the data sorted, so no need to filter further
    setShowedData(postData);
  } else {
    const now = new Date();
    let filteredData = [];
    
    switch (timePeriod) {
      case 'last_week':
        filteredData = postData.filter(post => {
          const postDate = new Date(post.createdAt);
          const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return postDate >= oneWeekAgo && postDate <= now;
        });
        break;
      case 'last_month':
        filteredData = postData.filter(post => {
          const postDate = new Date(post.createdAt);
          const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
          return postDate >= oneMonthAgo && postDate <= now;
        });
        break;
      case 'last_year':
        filteredData = postData.filter(post => {
          const postDate = new Date(post.createdAt);
          const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
          return postDate >= oneYearAgo && postDate <= now;
        });
        break;
      case 'today':
        filteredData = postData.filter(post => {
          const postDate = new Date(post.createdAt);
          const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
          return postDate >= todayStart && postDate < todayEnd;
        });
        break;
      default:
        // Handle default case
        break;
    }
    setShowedData(filteredData);

  }
}, [timePeriod]);
  useEffect(() => {
  
    const userId = window.localStorage.getItem("userId");
    // const fetchsposts = async () => {
    //   setLoading(true);
    //   const sPosts = await getSavedPosts(userId);
    //   const filteredPosts = sPosts.filter(
    //     (post) => post.public === true && post.forum === false
    //   );
    //   setSavedPosts(filteredPosts);
    //   setLoading(false);
    // };
    // fetchsposts();

    syncPosts(true);
   
    console.log("start in portfolio with useiD is ", userId)
    const fetchUser = async () => {
      setLoading(true);
      const userr = await getUser(userId);
      setUser(userr);
    
      // setActive(userr.active);
      console.log("userr ", userr);
      // console.log('user ',user)
    };
    if (userId) {
      fetchUser();
    }
  }, []);

  const syncPosts = async (Loading) => {
    if(Loading) setLoading(true)
     const posts = await getPosts(userId);
      const filteredPosts = posts.filter(
         (post) => post.public == true && post.forum == true
      );
    setPostData(filteredPosts);
    setShowedData(filteredPosts)
    if(Loading) setLoading(false)
      
  }
  
 
  
    const handleSearchChange = (e) => {
      setSearchText(e.target.value );
      
  };

  const handleTimePeriodChange = (e) => {
    setTimePeriod( e.target.value );
  };

 
  return (
    <div className='min-h-screen flex justify-center bg-[#091b28]'>
      <div className='w-[100%] sm:w-[90%] md:w-[70%] lg:w-[60%]'>
        
        <div className='flex justify-center items-center gap-3 mt-3 text-gray-100'>
          <Link to='/user/forum'
            className='px-3 w-full  flex justify-center items-center gap-1  bg-[#154b6d] py-1 border-0  hover:text-gray-100 ring-1 ring-inset   hover:ring-2  hover:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
           </svg>

            <p>Community Forum</p>

          </Link>
           <Link to='/user/forum/saved'
            className='px-3 w-full text-center flex justify-center items-center gap-1   py-1 border-0 hover:text-gray-100 ring-1 ring-inset    hover:ring-inset hover:ring-blue-600 sm:text-sm sm:leading-6'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

           <p> Saved</p>
          </Link>
           <Link to='/user/forum/own'
            className='px-3 w-full text-center flex justify-center items-center gap-1  py-1 border-0 hover:text-gray-100 ring-1 ring-inset     hover:ring-inset hover:ring-blue-600 sm:text-sm sm:leading-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
         <p>My own</p>
            
            </Link>
        </div>
              {A?<> 
          <div className="flex flex-col gap-2">
             <ForumPostCreation syncPosts={syncPosts} setPostCreated={setPostCreated} />
         
          
      {postCreated&&<p className='text-white text-center'>your post has been sent to  the community for review.</p>}
                   <div className="px-4 flex items-center justify-center gap-2">
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
                <input type="text"
                  onChange={handleSearchChange}
                placeholder="Search for posts"
                  id="table-search-users"
                  className=" outline-none pl-10 block w-full rounded-md  py-1 border-0 text-gray-100 ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 bg-[#10213a]  focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"  />
        </div>
     
           
           
              <select
                value={timePeriod}
                onChange={handleTimePeriodChange}
                className="text-sm pl-3 w-fit outline-none block  rounded-md  py-1 border-0 text-gray-100 ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 bg-[#10213a]  focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                aria-labelledby="dropdownSelectButton">
        <option value="most_recent">most recent</option>
        <option value="today">today</option>
        <option value="last_week" selected>Last week</option>
        <option value="last_month">Last month</option>
        <option value="last_year">Last year</option>
    </select>

            </div>
          {showedData.length>0&&<p className="w-full flex justify-center text-gray-400 ">{showedData.length} Results</p>}
            {!loading && postData ? <div className="flex flex-col gap-0 ">
        
            {showedData.slice().reverse().map((post) => {
                return (
                    <ForumFullPost key={post._id} postt={post} syncPosts={syncPosts} user={user} />)
    
            })}
            </div> : <PostLoader forum={true} />}
            </div></>
                : <p className="p-[100px] font-semibold text-white text-center"> you are not accepted yet wait until we will accept your join request ,after checking your informations</p>}
      </div>
    </div>
  );
};

export default CommunityForum;
