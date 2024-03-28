import React, { useEffect, useState } from "react";
import FullPost from "../BlogPostElements/FullPost";
import { useDataContext } from "../../../../utils/useContext";
import { fetchPosts } from "../../../../StoreN/blogSlice";
import PostCreation from "./PostCreation";
import PostLoader from "../../../Common/Loaders/postLoader";
import { useSearchParams } from "react-router-dom";
import posts from "../../../../Constants/userPosts";

const OwnPosts = () => {
  const { getPosts, getUser, getSavedPosts } = useDataContext();
  console.log("start in feed section");
  const A = window.localStorage.getItem("A") === "true";
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [postCreated, setPostCreated] = useState(false);
  const userId = window.localStorage.getItem("userId");

  
  useEffect(() => {
    setTimeout(() => {
      setPostCreated(false);
    }, 3000);
  }, [postCreated]);

  useEffect(() => {
  window.scrollTo(0, 0)
    const userId = window.localStorage.getItem("userId");
  
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
      if(Loading) setLoading(false)
     const posts = await getPosts(userId);
      const filteredPosts = posts.filter((post) => {
          const owner = post.postowner;
          return owner._id == userId;
        }
    );
        setPostData(filteredPosts);
          if(Loading) setLoading(false)

  }
  return (
    <div className="flex gap-2 justify-center items-center">
      <div className="w-[65%]">
        
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
            {!loading && postData ? (<>
              {/* <p> posts lenghth:{postData.length}</p> */}
               <div className="h-full flex flex-col gap-4 my-5 ">
                {postData
                  .slice()
                  .reverse()
                  .map((post) => {
                    return (
                      <FullPost
                        key={post._id}
                        postt={post}
                        syncPosts={syncPosts}
                        user={user}
                        own={true}
                      />
                    );
                  })}
              </div>
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
    </div>
  );
};

export default OwnPosts;
