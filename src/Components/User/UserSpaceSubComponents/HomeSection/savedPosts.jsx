import React, { useEffect, useState } from "react";
import FullPost from "../BlogPostElements/FullPost";
import { useDataContext } from "../../../../utils/useContext";
import { fetchPosts } from "../../../../StoreN/blogSlice";
import PostCreation from "./PostCreation";
import PostLoader from "../../../Common/Loaders/postLoader";
import { useSearchParams } from "react-router-dom";
import posts from "../../../../Constants/userPosts";

const SavedPosts = () => {
  const {getUser, getSavedPosts } = useDataContext();
  console.log("start in feed section");
  const A = window.localStorage.getItem("A") === "true";
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const userId = window.localStorage.getItem("userId");


 

  useEffect(() => {
  window.scrollTo(0, 0)
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
    syncPosts();
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

  const syncPosts = async () => {
    setLoading(true);
   const sPosts = await getSavedPosts(userId);
      const filteredPosts = sPosts.filter(
        (post) => post.public === true && post.forum === false
      );
    setPostData(filteredPosts);
    setLoading(false);
  };
  // useEffect(() => {
  //   if (!active) {
  //     setLoading(false);
  //   }
  //   if (active) {
  //     syncPosts();
  //     console.log("posts in feed section", postData);
  //   }
  // }, [active]);
  // console.log("active", A);
  // const syncPosts = async () => {
  //       setLoading(true);

  //   const type = searchParams.get("t");

  //   const userId = window.localStorage.getItem("userId");

  //   console.log("in sync post feed section out", Math.random());
  //   setLoading(true);
  //   getPosts()
  //     .then((postts) => {
  //       const filteredPosts = postts.filter(
  //         (post) => post.public == true && post.forum == false
  //       );
  //       const myp = postts.filter((post) => {
  //         const owner = post.postowner;
  //         return owner._id == userId;
  //       });

  //       setMyPosts(myp);
  //       if (!type) {
  //         setPostData(filteredPosts);
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setLoading(false);
  // };
  // const type = searchParams.get("t");
  // const save = searchParams.get("t") == "save";
  // const myp = searchParams.get("t") == "myp";
  // useEffect(() => {
  //   console.log("Myposts", myPosts);
  //   console.log("savedposts", savedPosts);

  //   if (type) {
  //       setLoading(true);
  //       if (save) {
  //           console.log('==================================')
  //           console.log('here in save')
  //           console.log(savedPosts)
  //           console.log('==================================')
            
  //           setPostData(savedPosts);
  //           setLoading(false)
  //     } else if(myp) {
  //           setPostData(myPosts);
  //           setLoading(false)
            
  //     }
  //   }
  // }, [searchParams,savedPosts]);

  return (
   <div className="flex gap-2 justify-center items-center">
      <div className="w-[65%]">
        
          {A ? (
        <>
          <div className="flex flex-col gap-2">

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
export default SavedPosts;
