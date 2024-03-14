import { useState } from "react";
import { useDataContext } from "../../../../utils/useContext";
import { AddRepley } from "./addreply";
import { Reply } from "./reply";
import { formatDate } from "../../../../utils/timeFormater";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export function Comment({ postId, owner, comment, time, user ,syncPosts}) {
  const { doCommentLike } = useDataContext();

  const [like, setLike] = useState( comment.likes.some((like) => like == user));
  const [repley, setReply] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes.length );
  console.log("cm._id", comment);
  const setLlike = () => {
    doCommentLike(postId, comment._id, user.userId);
    like ? setLikesCount((prv) => --prv) : setLikesCount((prv) => ++prv);
  };
  console.log('comment.replies',comment.replies);
  return (
    <>
      <div className="flex bg-white gap-2  px-3 pt-2">
        <div className="pt-1 w-[20%">
          <img
            className=" w-10 h-10   rounded-full object-cover"
            src={apiUrl + "/" + owner.image}
            alt={owner.image}
          />
        </div>

        <article className=" rounded-2xl   w-[83%]">
          <div className=" flex w-full  flex-grow">
            <div className="flex flex-col flex-grow ">
              <div className="flex flex-col bg-[#eceef0] w-fit py-2 pl-2 pr-10 flex-grow rounded-2xl">
                <p className=" text-gray-700 font-semibold text-[0.85rem] ">
                  {owner.username}
                </p>
                <p className="p-0 m-0 text-gray-600 font-serif">{comment.content}</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="px-2 flex items-center justify-start gap-2">
                   <p className=" w-[25px]  text-[13px] text-gray-600 dark:text-gray-400 ">
                  {time}
                </p>
                <p
                  className={` text-[14px] text-gray-600 ${
                    like && " text-red-500"
                  } hover:text-red-400 cursor-pointer `}
                  onClick={() => {
                    setLike((prv) => !prv);
                    setLlike();
                  }}
                >
                  Like
                </p>
                 <p
                  className={` text-[14px] text-gray-600 flex justify-center items-center cursor-pointer 
                  ${
                        repley && " font-bold"
                      } 
                  `}
                  onClick={() => {
                    setReply((prv) => !prv);
                  }}
                >
                    reply  {comment.replies.length > 0 && <h4 className="text-[#4c4c4c] text-[10px]">{`(${comment.replies.length})`}</h4>}
                </p>
                
                
                  <li className="flex items-center  cursor-pointer p-1">
                    <div
                      className={`flex items-center justify-start w-fit     text-sm `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="01.5"
                        stroke="currentColor"
                        className="w-3 h-3 p-0 m-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      <p className="p-0 m-0 text-xs">{likesCount}</p>
                    </div>
                  </li>
              
                </div>
                {/* {comment.replies.length >0 && <p className=" pr-5 text-[12px] text-gray-600 cursor-pointer"
                onClick={()=>{setReply((prv)=>!prv)}}
                >{comment.replies.length} replies</p>}  */}
              </div>
              {repley &&comment.replies&&
              // postId, owner,commentId ,reply, time, user ,syncPosts
                comment.replies.map((rep) => {
                  return ( 
                    <Reply
                      key={rep._id}
                      postId={postId}
                      ownerId={rep.owner}
                      commentId={comment._id}
                      reply={rep}
                      time={formatDate(rep.createdAt)}
                      user={user}
                    />
                )
              })
              
              }
              {repley&&<div className="pl-4">
                <AddRepley
                  userImg={user.userImg}
                  syncPosts={syncPosts}
                  userId={user.userId}
                  postId={postId}
                  commentId={comment._id}
                />
                </div>}
            </div>
            {/* <div
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex  items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg> */}

            {/* <span className="sr-only">Comment settings</span> */}
            {/* </div> */}

            {/* <div id="dropdownComment1"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div> */}
          </div>
        </article>
      </div>
    </>
  );
}
