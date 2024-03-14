/* eslint-disable no-dupe-keys */
import { useEffect, useState } from "react";
import { Commentadd } from "./addComent";
import { ImageSwiper } from "./imgeSlider";
import { Comment } from "./comment";
import { useDataContext } from "../../../../utils/useContext";
import { formatDate } from "../../../../utils/timeFormater";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const FullPost = ({ postt, syncPosts }) => {
  
  const { auth, doLike } = useDataContext();
  const post = postt ? postt : {};
  // const postOwner = ;
  console.log("post in full", post);

  const [addComment, setAddComment] = useState(false);
  // console.log("like state", post.likes.some(like => {
  //   console.log(like)
  //   return like === auth.userId
  // }))
  const [like, setLike] = useState(
    post.likes.some((like) => like._id == auth.userId)
  );
  const [likesCount, setLikesCount] = useState(post.likes.length);
  console.log(post.title, likesCount);
  const [splitComments, setSplitComments] = useState(false);
  const [splitText, setSplitText] = useState(true);

  // useEffect(() => {
  //  doLike(post._id, auth.userId);
  // }, [like]);
  // useEffect(() => {
  //   syncPosts().then(res =>
  //   console.log("res"));
  // }, [post]);
  const postowner = post.postowner;

  console.log('post owner==================================', postowner)
  console.log('post owner==================================', postowner&&postowner.image)
  console.log('post owner==================================', postowner&&postowner.name)
  const setLlike = () => {
    doLike(post._id, auth.userId);
    setLike((prevLike) => !prevLike);
    like ? setLikesCount((prv) => --prv) : setLikesCount((prv) => ++prv);
  };
  return (
    <>
      <div className="gap-2 mb-[rem] p-4 h-fit ">
        <div className="w-full bg-white ring-1 ring-gray-300 rounded">
          <div className="flex gap-2 items-center justify-start p-4">
           {postowner? <img
              className="w-12 h-12 rounded-full object-cover"
              src={apiUrl + "/" +postowner.image}
              />:<p>prblm</p>}
            <div>
              <p className="block font-medium text-base leading-snug text-gray-900 ">
                {postowner && postowner.name}&nbsp;{postowner&&postowner.familyName}
              </p>
              <p className="block text-sm text-gray-500 font-light">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>
          <p className="text-gray-800 font-bold  leading-snug md:leading-normal px-3">
            |{post.title}|
          </p>
          <p className="text-gray-700 leading-snug md:leading-normal p-3">
            {post.content.length < 100 ? (
              <p>{post.content}</p>
            ) : splitText ? (
              <p
                onClick={() => {
                  setSplitText(false);
                }}
                className="p-0 m-0 inline-block cursor-pointer"
              >
                {post.content.slice(0, 251)}
                <p className="p-0 m-0 text-blue-400 inline-block">
                  {" "}
                  see more...
                </p>
              </p>
            ) : (
              <p
                onClick={() => {
                  setSplitText(true);
                }}
                className="p-0 m-0 inline-block cursor-pointer"
              >
                {post.content}
                <p className="p-0 m-0 text-blue-400 inline-block">
                  see less
                </p>
              </p>
            )}
          </p>
          {post.images.length > 0 && <ImageSwiper images={post.images} />}
          <div>
            <div className="px-2 flex justify-between items-center text-sm text-gray-400 mt-5 py-2">
              <div>{likesCount} Jaime</div>
              <div className="ml-1  font-light">
                {post.comments.length} commentaires
              </div>
            </div>
            <hr className="" />
            <div className="flex  items-center ">
              <div
                onClick={setLlike}
                className={`w-1/2 p-2 text-center border-r-2 cursor-pointer  flex items-center justify-center ${
                  like && " text-red-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="01.5"
                  stroke="currentColor"
                  className="w-6 h-6 p-0 m-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Like
              </div>
              <div
                onClick={() => {
                  setAddComment((prv) => !prv);
                }}
                className="w-1/2 p-2 text-center cursor-pointer  flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                Comment
              </div>
            </div>
            {addComment && (
              <>
                <hr />
                <Commentadd
                  userImg={auth.userImg}
                  syncPosts={syncPosts}
                  userId={auth.userId}
                  postId={post._id}
                />
                {/* <hr/> */}
                <div className="flex flex-col pb-4 ">
                  {post.comments.map((item) => {
                    return (
                      <Comment
                        key={item.id}
                        postId={post._id}
                        owner={item.owner}
                        comment={item}
                        user={auth}
                        time={formatDate(item.createdAt)}
                        syncPosts={syncPosts}
                      />
                    );
                  })}
                  <div className="flex justify-center ">
                    {post.comments.length > 4 && (
                      <>
                        {" "}
                        <div
                          className=" w-fit flex flex-col items-center group cursor-pointer py-2"
                          onClick={() => {
                            setSplitComments((prv) => !prv);
                          }}
                        >
                          {!splitComments && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                              />
                            </svg>
                          )}
                          <p className="p-0 m-0 text-center text-sm  group-hover:text-black">
                            {`See ${splitComments ? "more" : "less"}`}
                          </p>
                          {splitComments && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPost;
