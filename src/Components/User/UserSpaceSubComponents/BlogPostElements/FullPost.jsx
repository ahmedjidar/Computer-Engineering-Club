import { useState } from "react";
import { Commentadd } from "./addComent";
import { ImageSwiper } from "./imgeSlider";
import { Comment } from "./comment";

const demoComments = [
  {
    id: 1,
    user: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
      name: "Hamza kharatich",
    },
    comment: {
      text: "akhoya wlh manmonter makn3refch l design ana😂",
      date: "Nov.29,2010",
      likes: 20,
    },
  },
  {
    id: 1,
    user: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
      name: "mohamed kharatich",
    },
    comment: {
      text: "madert walo a mr knt saket how li jbadni ama ana kent mtabe3 walakin dakxi rah mofid machi ze3ma ola chi haja🫣",
      date: "Nov.29,2010",
      likes: 1,
    },
  },
  {
    id: 1,
    user: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
      name: "khalil 3en9ni",
    },
    comment: {
      text: " deal with it bro hna nass dyl E-commerce odakxi deal with it ana  bdit 7yati b 1 milion lxher bdit bohdi oknt knfi9 bohdi kola nhar okanfter ",
      date: "Nov.29,2010",
      likes: 2,
    },
  },
  {
    id: 1,
    user: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjjX6Sq1VDru7NmOo5f1T6N5ls9gCILFMeg&usqp=CAU",
      name: "hmed jidar",
    },
    comment: {
      text: "hadouk lklaab haydo mn tema 333 3aw 3aw  wlh wnxed xi wahd tanaklo",
      date: "Nov.29,2010",
      likes: 10,
    },
  },
];

const demoPostData =
  {
      user: { name: "user", img: "" },
      post: {
      date: "",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
      imgs:["https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg","https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg","https://aprimariavsg.com/wp-content/uploads/2019/10/escola-de-salut-768x435.jpg"],
      likes: 99,
      comments: demoComments,
      },
  };

const FullPost = () => {
  const [postData, setPostData] = useState(demoPostData);

  // const [comments, setComments] = useState(democomments);
  const [addComment, setAddComment] = useState(false);

  const [like, setLike] = useState(false);
  const [splitComments, setSplitComments] = useState(true);
  const [splitText, setSplitText] = useState(true);

  const addone = (comment) => {
    setPostData((prv) => ({
      ...prv,
      post: {
        ...prv.post,
      comments: [...prv.post.comments, comment],
      }
    }));
  };
  
  let finalcoments = postData.post.comments;
  if (splitComments) {
    finalcoments = demoComments.slice(0, 2);
  }

  return (
    <>
    {/* what's in your mind */}
      {/* <div className="w-full flex items-center gap-3 rounded">
        <img
          className="w-12 h-12 rounded-full"
          src="https://media.licdn.com/dms/image/D4E03AQFT6HaFfbN-RQ/profile-displayphoto-shrink_800_800/0/1694863697491?e=2147483647&v=beta&t=NSzTOnOxtcmPZrxwIZx7ocR-1hKNtWORrGKHZlsD8K0"
        />
        <input
          className="this no w-full bg-gray-50 rounded-full px-3 py-2"
          placeholder="What's on your mind...?"
        />
        <i className="fa-solid fa-paperclip"></i>
        <i className="fa-regular fa-paper-plane px-2"></i>
      </div> */}
    {/* post */}
    <div className="gap-2 mb-[500rem] p-4">
      <div className="w-full bg-white ring-1 ring-gray-300 rounded">
        <div className="flex gap-2 items-center justify-start p-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <div>
            <p className="block font-medium text-base leading-snug text-gray-900 ">
              {postData.user.name}
            </p>
            <p className="block text-sm text-gray-500 font-light">
              {postData.user.date}
              16 December at 08:25
            </p>
          </div>
        </div>
        <p className="text-gray-700 leading-snug md:leading-normal p-3">
          {splitText ? (
            <p
              onClick={() => {
                setSplitText(false);
              }}
              className="p-0 m-0 inline-block cursor-pointer"
            >
              {postData.post.text.slice(0, 251)}
              <p className= "p-0 m-0 text-blue-400 inline-block"> see more...</p>
            </p>
          ) : (
            <p
              onClick={() => {
                setSplitText(true);
              }}
              className="p-0 m-0 inline-block cursor-pointer"
            >
              {postData.post.text}
              <p className="p-0 m-0 text-blue-400 inline-block"> see less</p>{" "}
            </p>
          )}
        </p>
        {postData.post.imgs.length>0 &&  <ImageSwiper images={postData.post.imgs}/> }
        <div>
          <div className="px-2 flex justify-between items-center text-sm text-gray-400 mt-5 py-2">
            <div>{postData.post.likes} Jaime</div>
            <div className="ml-1  font-light">
              {postData.post.comments.length} commentaires
            </div>
          </div>
          <hr className="" />
          <div className="flex  items-center ">
            <div
              onClick={() => {
                setLike((prv) => !prv);
              }}
              className={`w-1/2 p-2 text-center border-r-2 cursor-pointer  ${
                like && " text-red-500"
              }`}
            >
              <i
                className={`fa-solid fa-heart p-1 px-2 ${
                  like && " text-red-500"
                }`}
              ></i>
              Like
            </div>
            <div
              onClick={() => {
                setAddComment((prv) => !prv);
              }}
              className="w-1/2 p-2 text-center cursor-pointer"
            >
              <i className="fa-solid fa-message p-1 px-2"></i>Comment
            </div>
          </div>
          {addComment && (
            <>
              <hr />
              <Commentadd addComment={addone} />
              <div className="flex flex-col">
                {finalcoments.map((item) => {
                  return (
                    <Comment
                      key={item.id}
                      user={item.user}
                      comment={item.comment}
                    />
                  );
                })}
                <div className="flex justify-center ">
                  <div
                    className=" w-fit flex flex-col items-center group cursor-pointer py-2"
                    onClick={() => {
                      setSplitComments((prv) => !prv);
                    }}
                  >
                    {!splitComments && (
                      <i className="fa-solid fa-chevron-up translate-y-1 group-hover:-translate-y-0 group-hover:text-blue-500 "></i>
                    )}
                    <p className="p-0 m-0 text-center text-sm  group-hover:text-black">
                      {`See ${splitComments ? "more" : "less"}`}
                    </p>
                    {splitComments && (
                      <i className="fa-solid fa-chevron-down -translate-y-1 group-hover:translate-y-0 group-hover:text-blue-500 "></i>
                    )}
                  </div>
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