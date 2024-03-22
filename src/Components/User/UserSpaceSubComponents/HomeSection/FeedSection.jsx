import React, { useEffect, useState } from "react";
import FullPost from "../BlogPostElements/FullPost";
import { useDataContext } from "../../../../utils/useContext";
import { fetchPosts } from "../../../../StoreN/blogSlice";
import PostCreation from "./PostCreation";
import PostLoader from "../../../Common/Loaders/postLoader";
import { useSearchParams } from "react-router-dom";
import posts from "../../../../Constants/userPosts";

const FeedSection = () => {
  const { getPosts, getUser, getSavedPosts } = useDataContext();
  console.log("start in feed section");
  const A = window.localStorage.getItem("A") === "true";
  const [searchParams] = useSearchParams();
  const [savedPosts, setSavedPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(true);
  const [user, setUser] = useState({});
  const [postCreated, setPostCreated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPostCreated(false);
    }, 3000);
  }, [postCreated]);

  useEffect(() => {
    const type = searchParams.get("t");
    const save = searchParams.get("t") == "save";
    const myp = searchParams.get("t") == "myp";
    console.log(
      "==================================page rendered==>" +
        type +
        "============================================="
    );
    const userId = window.localStorage.getItem("userId");

    if (save) {
      const fetchsposts = async () => {
        setLoading(true);
          const sPosts = await getSavedPosts(userId);
           const filteredPosts = sPosts.filter(
          (post) => post.public === true && post.forum === false
        );
        setSavedPosts(filteredPosts);
        setLoading(false);
      };

      fetchsposts();
    }

    console.log("============================ext:" + "t:" + type);

    console.log("start in portfolio with useiD is ", userId);
    const fetchUser = async () => {
      setLoading(true);
      const userr = await getUser(userId);
      setUser(userr);
      setLoading(false);
      setActive(userr.active);
      console.log("userr ", userr);
      // console.log('user ',user)
    };
    if (userId) {
      fetchUser();
    }

    //======
  }, [searchParams]);
  useEffect(() => {
    if (!active) {
      setLoading(false);
    }
    if (active) {
      syncPosts();
      console.log("posts in feed section", postData);
    }
  }, [active, searchParams]);
  console.log("active", active);
  const syncPosts = async () => {
    const type = searchParams.get("t");

    const userId = window.localStorage.getItem("userId");

    console.log("in sync post feed section out", Math.random());
    setLoading(true);
    getPosts()
      .then((postts) => {
        const filteredPosts = postts.filter(
          (post) => post.public === true && post.forum === false
        );
        const myp = postts.filter((post) => {
          const owner = post.postowner;
          return owner._id == userId;
        });

        setMyPosts(myp);
        if (!type) {
          setPostData(filteredPosts);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  const type = searchParams.get("t");
  const save = searchParams.get("t") == "save";
  const myp = searchParams.get("t") == "myp";
  useEffect(() => {
    console.log("Myposts", myPosts);
    console.log("savedposts", savedPosts);

    if (type) {
        if (save) {
            console.log('==================================')
            console.log('here in save')
            console.log(savedPosts)
            console.log('==================================')
            
            setPostData(savedPosts);
            setLoading(false)
      } else {
            setPostData(myPosts);
            setLoading(false)
            
      }
    }
  }, [searchParams,savedPosts]);

  return (
    <div>
      {active ? (
        <>
          <div className="flex flex-col gap-2">
            {!type ? (
              <PostCreation
                syncPosts={syncPosts}
                setPostCreated={setPostCreated}
              />
            ) : (
              <div className="mt-5 text-center">
                {save ? "your saved posts" : myp ? "Your own posts" : ""}
              </div>
            )}
            {postCreated && (
              <p className="text-center">
                your post has been sent to the community for review.
              </p>
            )}
            {!loading && postData ? (
              <div className="flex flex-col gap-4 mt-5 ">
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
