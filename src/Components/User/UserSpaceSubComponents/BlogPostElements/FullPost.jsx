import { useEffect, useState } from "react";
import { Commentadd } from "./addComent";
import { ImageSwiper } from "./imgeSlider";
import { Comment } from "./comment";
import { useSelector } from "react-redux";
// import {fetchPosts,doLike} from "/src/Store/blogSlice.js"
import { useDispatch } from "react-redux";
import { doLike } from "../../../../Utils/getPosts";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

function formatDate(inputDate) {
  const options = { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}
// const demoComments = [
//   {
//     id: 1,
//     user: {
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
//       name: "Hamza kharatich",
//     },
//     comment: {
//       text: "akhoya wlh manmonter makn3refch l design ana😂",
//       date: "Nov.29,2010",
//       likes: 20,
//     },
//   },
//   {
//     id: 1,
//     user: {
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
//       name: "mohamed kharatich",
//     },
//     comment: {
//       text: "madert walo a mr knt saket how li jbadni ama ana kent mtabe3 walakin dakxi rah mofid machi ze3ma ola chi haja🫣",
//       date: "Nov.29,2010",
//       likes: 1,
//     },
//   },
//   {
//     id: 1,
//     user: {
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
//       name: "khalil 3en9ni",
//     },
//     comment: {
//       text: " deal with it bro hna nass dyl E-commerce odakxi deal with it ana  bdit 7yati b 1 milion lxher bdit bohdi oknt knfi9 bohdi kola nhar okanfter ",
//       date: "Nov.29,2010",
//       likes: 2,
//     },
//   },
//   {
//     id: 1,
//     user: {
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
//       name: "hmed jidar",
//     },
//     comment: {
//       text: "hadouk lklaab haydo mn tema 333 3aw 3aw  wlh wnxed xi wahd tanaklo",
//       date: "Nov.29,2010",
//       likes: 10,
//     },
//   },
// ];

// const demoPostData =
//   {
//       user: { name: "user", img: "" },
//       post: {
//       date: "",
//       text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.`,
//       imgs:["https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg","https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg","https://aprimariavsg.com/wp-content/uploads/2019/10/escola-de-salut-768x435.jpg"],
//       likes: 99,
//       comments: demoComments,
//       },
//   };

const FullPost = ({ postt,syncPosts }) => {
  const dispatch = useDispatch();
  const auth= useSelector(state=>state.auth)
  const [post, setPost] = useState(postt);
  useEffect(() => {
  
   setPost(postt)
},[])
  const postOwner = post.postowner;
  console.log('post in full',post)

  const [addComment, setAddComment] = useState(false);
  // console.log("like state", post.likes.some(like => {
  //   console.log(like)
  //   return like === auth.userId
  // }))
  const [like, setLike] = useState(post.likes.some(like => like._id == auth.userId));
  const [splitComments, setSplitComments] = useState(false);
  const [splitText, setSplitText] = useState(true);



  useEffect(() => {
    syncPosts().then(res =>
    console.log("res"));
    setPost(postt)
    doLike(post._id, auth.userId);

  }, [like])
//   const setLike() => {
  
// }
  return (
    <>
    <div className="gap-2 mb-[rem] p-4 h-fit ">
      <div className="w-full bg-white ring-1 ring-gray-300 rounded">
        <div className="flex gap-2 items-center justify-start p-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={apiUrl+"/"+postOwner.image}
          />
          <div>
            <p className="block font-medium text-base leading-snug text-gray-900 ">
              {postOwner.name+" "+postOwner.familyName}
            </p>
            <p className="block text-sm text-gray-500 font-light">
                {formatDate(post.createdAt)}
              {/* 16 December at 08:25 */}
            </p>
          </div>
          </div>
          <p className="text-gray-800 font-bold  leading-snug md:leading-normal px-3">|{post.title}|</p>
        <p className="text-gray-700 leading-snug md:leading-normal p-3">
            {post.content.length < 100 ?
              <p>{post.content}</p>
              :
              splitText ? (
            <p
              onClick={() => {
                setSplitText(false);
              }}
              className="p-0 m-0 inline-block cursor-pointer"
            >
              {post.content.slice(0, 251)}
              <p className= "p-0 m-0 text-blue-400 inline-block"> see more...</p>
            </p>
          ) : (
            <p
              onClick={() => {
                setSplitText(true);
              }}
              className="p-0 m-0 inline-block cursor-pointer"
            >
              {post.content}
              <p className="p-0 m-0 text-blue-400 inline-block"> see less</p>{" "}
            </p>
          )}
        </p>
        {post.images.length>0 &&  <ImageSwiper images={post.images}/> }
        <div>
          <div className="px-2 flex justify-between items-center text-sm text-gray-400 mt-5 py-2">
            <div>{post.likes.length} Jaime</div>
            <div className="ml-1  font-light">
              {post.comments.length} commentaires
            </div>
          </div>
          <hr className="" />
          <div className="flex  items-center ">
            <div
              onClick={() => {
                  setLike(prv=>!prv)

              }}
              className={`w-1/2 p-2 text-center border-r-2 cursor-pointer  flex items-center justify-center ${
                like && " text-red-500"
              }`}
              >
         

     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="01.5" stroke="currentColor" className="w-6 h-6 p-0 m-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

             
              Like
            </div>
            <div
              onClick={() => {
                setAddComment((prv) => !prv);
              }}
              className="w-1/2 p-2 text-center cursor-pointer  flex items-center justify-center"
            >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

                Comment
            </div>
          </div>
          {addComment && (
            <>
              <hr />
              <Commentadd  userImg={auth.userImg} syncPosts={syncPosts}  userId={auth.userId} postId={post._id}/>
              <div className="flex flex-col">
                {post.comments.map((item) => {
                  return (
                    <Comment
                      key={item.id}
                      user={item.owner}
                      comment={item.content}
                    />
                  );
                })}
                <div className="flex justify-center ">
                  { post.comments.length >4&& <> <div
                    className=" w-fit flex flex-col items-center group cursor-pointer py-2"
                    onClick={() => {
                      setSplitComments((prv) => !prv);
                    }}
                    >
                   
                    {!splitComments && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>

                    )}
                    <p className="p-0 m-0 text-center text-sm  group-hover:text-black" >
                      {`See ${splitComments ? "more" : "less"}`}
                    </p>
                    {splitComments && (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                        )}
                        
                  </div></>}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </>
  );
}

export default FullPost;