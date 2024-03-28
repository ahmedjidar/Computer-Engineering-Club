/* eslint-disable no-dupe-keys */
import { useEffect, useState } from "react";
import { Commentadd } from "./BlogPostElements/addComent";
import { ImageSwiper } from "./BlogPostElements/imgeSlider";
import { Comment } from "./BlogPostElements/comment";
import { useDataContext } from "../../../utils/useContext";
import { formatDate } from "../../../utils/timeFormater";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
function confirmDelete(text) {
    // Prompt the user for confirmation and store the result
    const userInput = prompt("To confirm deletion, please enter '"+ text+"'");

    // Check if the user input matches the expected string
    if (userInput === text) {
        // If the input matches, return true
        return true;
    } else {
        // If the input does not match, show an alert and return false
        alert("Incorrect input. Please try again.");
        return false;
    }
}
const ForumFullPost = ({ postt, syncPosts,user,own }) => {
    const { auth, doLike,doSave,deletePost } = useDataContext();

  const post = postt ? postt : {};
  // const postOwner = ;
  console.log("post in full", post);
   const handleRowDelete = () => {

    const deleting = async () => {
      const p = await deletePost(postt._id);
      // console.log("posts in getposts then", p);
      // setPostData(p);
    };
   
    if (confirmDelete('I am sure About deleting it')) {
       deleting()
      .then(() => console.log("xi haja"))
      .catch(() => { });
      syncPosts();
      setTimeout(() => {
      syncPosts();
      }, 200);
      setTimeout(() => {
      syncPosts();
      }, 500);
       setTimeout(() => {
      syncPosts();
       }, 1000);
    }
  };
  const [addComment, setAddComment] = useState(false);
  // console.log("like state", post.likes.some(like => {
  //   console.log(like)
  //   return like === auth.userId
  // }))
  const [like, setLike] = useState(
    post.likes.some((like) => like._id == auth.userId)
  );
    const [save, setSave] = useState(
    user.savedPosts.some((post) => post.post == postt._id)
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

  
  const setLlike = () => {
    doLike(post._id, auth.userId);
    setLike((prevLike) => !prevLike);
    like ? setLikesCount((prv) => --prv) : setLikesCount((prv) => ++prv);
  };
   const toggleSaveHandler = () => {
    doSave(post._id, user._id);
    setSave((prv) => !prv);
  };
  return (
    <>
      <div className="  p-4 w-full ">
         {own && <div className="flex justify-center items-center bg-[#103850] rounded-t-md text-gray-300">
          {postt.public ?
            <div className="flex justify-center items-center">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-400 w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
</svg>
<p>Live now</p></div> :
            <div className="flex justify-center items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-400 w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

<p>Still in review...</p></div>
          }
        </div>}
        <div className="w-full bg-[#0b2739] py-3    rounded flex  ">
  
          <div className="flex flex-column  gap-2  items-center justify-start pl-4 py-1">
            {postowner ? (
              <div className="flex flex-col items-center">
                <div   className="w-[5rem] h-[5rem] rounded-xl ">
                  <img
                className="w-[5rem] h-[5rem] rounded-xl object-cover"
                src={apiUrl + "/" + postowner.image}
              />
                </div>
                
              <p className="text-[#1f5380]">{postowner.status}</p>
              </div>
              
            ) : (
              <p>prblm</p>
            )}
            
          </div>
          <div className="px-2 w-full flex flex-col  gap-5">
            <div className="pl-2 flex flex-col gap-2  w-full">
              <div>
              <p className="block font-medium text-base leading-snug text-white ">
                {postowner && postowner.name}&nbsp;
                {postowner && postowner.familyName}
              </p>
              <p className="block text-xs text-gray-500 font-light">
                posted {formatDate(post.createdAt)} ago
              </p>
              </div>
              <div className="flex justify-start items-center w-full translate-y-[-40px]">
 <div className={`w-full flex justify-end text-[#5d7291] cursor-pointer`} onClick={toggleSaveHandler}>
                 <svg className=" block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill={save?'#5d7291':'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                     <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                 </svg>


             </div>
             {postowner._id==user._id&&  <div className="cursor-pointer text-[#5d7291] " onClick={handleRowDelete}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
        </div>}
              </div>
              
              <div>
                 <p className="text-white w-fit px-2 py-1 font-bold bg-[#103750]  leading-snug md:leading-normal ">
              {post.title}
            </p>
            <p className="text-gray-300 leading-snug md:leading-normal">
              {post.content.length < 260 ? (
                    <p className="max-w-[95%] flex flex-wrap text-break pl-4">{post.content}</p>
              ) : splitText ? (
                <p
                  onClick={() => {
                    setSplitText(false);
                  }}
                  className="p-0 m-0 inline-block cursor-pointer"
                >
                  {post.content.slice(0, 260)}
                  <p className="p-0 m-0 text-blue-400 inline-block">
                    &nbsp;
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
                  <p className="p-0 m-0 text-blue-400 inline-block"> &nbsp;see less</p>
                </p>
              )}
            </p>
           </div>
          </div>
          {/* {post.images.length > 0 && <ImageSwiper images={post.images} />} */}
          <div className="w-full ">
            {/* <div className="px-2 flex justify-between items-center text-sm text-white mt-5 py-2">
              <div>{likesCount} Jaime</div>
              <div className="ml-1  font-light">
                {post.comments.length} commentaires
              </div>
            </div> */}
            
            <div className="w-full flex  items-center justify-start gap-2 ">
              <div
                onClick={setLlike}
                className={`w-fit py-1 px-2 text-center text-[#5d7291]  cursor-pointer  flex items-center justify-center bg-[#113850] rounded-md ${
                  like && " text-red"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                    fill={like?'#5d7291':'none'}
                  viewBox="0 0 24 24"
                  strokeWidth="01.5"
                  stroke="currentColor"
                  className="w-6 h-6 p-0 m-0 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>{likesCount}
              </div>
              <div
                  onClick={() => {
                    setAddComment((prv) => !prv);
                  }}
                  className={` w-fit py-1 px-2 rounded text-center cursor-pointer text-[#5d7291]  ${addComment?'bg-[#145075] text-gray-300':'bg-[#113850]'}  flex items-center justify-center`}
              >
             
               {post.comments.length==0?'reply': 'replies('+post.comments.length+')'}
              </div>
            </div>
           
            </div>
            
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
              forum={true}
                />
                {/* <hr/> */}
                <div className="flex mx-3 flex-col pb-4  bg-[#0b2739] rounded-b">
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
                        forum={true}
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
    </>
  );
};

export default ForumFullPost;
