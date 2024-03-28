import React, { useEffect, useState } from "react";
import FullPost from "../BlogPostElements/FullPost";
import { useDataContext } from "../../../../utils/useContext";
import PostCreation from "./PostCreation";
import PostLoader from "../../../Common/Loaders/postLoader";
import { postTypes } from "../../../../Constants/postOptions";

const FeedSection = () => {
  const { getPosts, getUser } = useDataContext();
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
  const [postType, setPostType] = useState("All");
  
  useEffect(() => {
    setTimeout(() => {
      setPostCreated(false);
    }, 3000);
  }, [postCreated]);


  
    useEffect(() => {
        if (searchText.length == 0) {
        setShowedData(postData)
        } else {
          
      const filteredData = showedData.filter(
        (post) => {
          const postowner = post.postowner;
          return (post.content.toLowerCase().includes(searchText.toLowerCase()) ||
            postowner.username.toLowerCase().includes(searchText.toLowerCase())) 
        }
      );
      setShowedData(filteredData)
      }
    
    }, [searchText]);
    useEffect(() => {
      console.log(postType)
      if (postType == 'All') {
        setShowedData(postData)
      } else {
          const filteredData = showedData.filter(
        (post) => {
          return (post.title.toLowerCase().includes(postType.toLowerCase()))
        }
      );
      setShowedData(filteredData)
      }
   setTimePeriod("most_recent");

     
  }, [postType]);
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
     setPostType("All");

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
         (post) => post.public == true && post.forum == false
      );
        setPostData(filteredPosts);
        setShowedData(filteredPosts);
    if(Loading) setLoading(false)
      
  }
    const handleSearchChange = (e) => {
      setSearchText(e.target.value );
      
  };

  const handleTimePeriodChange = (e) => {
    setTimePeriod( e.target.value );
  };

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };
  return (
    <div>
      {A ? (
        <>
          <div className="flex flex-col gap-2">
          
              <PostCreation
                syncPosts={syncPosts}
                setPostCreated={setPostCreated}
              />
            {postCreated && (
              <p className="text-center">
                your post has been sent to the community for review.
              </p>
            )}
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
                  className="px-5 block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
     
              <select name="title"
                value={postType}
                onChange={handlePostTypeChange}
              className=" p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>All</option>
               {postTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
           
              <select
                value={timePeriod}
                onChange={handleTimePeriodChange}
                className="text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                aria-labelledby="dropdownSelectButton">
        <option value="most_recent">most recent</option>
        <option value="today">today</option>
        <option value="last_week" selected>Last week</option>
        <option value="last_month">Last month</option>
        <option value="last_year">Last year</option>
    </select>

            </div>
          {showedData.length>0&&<p className="w-full flex justify-center text-gray-400 ">{showedData.length} Results</p>}
            {!loading && postData ? (<>
              {/* <p> posts lenghth:{postData.length}</p> */}
              
              {showedData.length>0?
                <div className="h-full flex flex-col gap-4 mt-3 mb-5 ">
                {showedData
                  .slice()
                  .reverse()
                  .map((post) => {
                    return (
                      <FullPost
                        key={post._id}
                        postt={post}
                        syncPosts={syncPosts}
                        user={user}
                      />
                    );
                  })}
                </div> :
                <p className="text-center">No results found</p>
              }
              
            </>
             
            ) : (
              <PostLoader forum={false} />
            )}
          </div>
        </>
      ) : (
        <p className="p-[100px] font-semibold">
          {" "}
          you are not accepted yet wait until we will accept your join request
          ,after checking your informations
        </p>
      )}
    </div>
  );
};

export default FeedSection;
