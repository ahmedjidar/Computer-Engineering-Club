import { useEffect, useState } from "react";
import { useDataContext } from "../../../../utils/useContext";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export function Reply({
  postId,
  ownerId,
  commentId,
  reply,
  time,
  user,
}) {
  const { doreplyLike ,getUser} = useDataContext();

  const [like, setLike] = useState(reply.likes.some((like) => like._id == user._id));
  const [likesCount, setLikesCount] = useState(reply.likes.length);
  const [owner, setOwner] = useState({});
  useEffect(() => {
     console.log("start in useefect reply")
  const fetch = async () => {
    try {
      const u = await getUser(ownerId);
      setOwner(u);
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };
  fetch();
}, []);

  const setLlike = () => {
    doreplyLike(postId, commentId, reply._id, user.userId);
    like ? setLikesCount((prv) => --prv) : setLikesCount((prv) => ++prv);
  };

  
  console.log('owner', owner);
    
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
              <div className="flex flex-col bg-[#eceef0] w-full p-2 flex-grow rounded-2xl">
                <p className=" text-gray-700 font-semibold text-[0.85rem] ">
                  {owner.username}
                </p>
                <p className="p-0 m-0 text-gray-600 font-serif">
                  {reply.content}
                </p>
              </div>
              <div className="px-1 flex items-center justify-start gap-2">
                <p className="  text-[13px] text-gray-600 dark:text-gray-400 ">
                  {time}
                </p>
                <p
                  className={` text-[14px] text-gray-600 ${
                    like && " text-red-500"
                  } hover:text-red-400 cursor-pointer `}
                  onClick={() => {
                    setLlike()
                    setLike((prv) => !prv);
                  }
                  }
                >
                  Like
                </p>

                <div className=" w-full flex items-center  p-2">
                  <li className="flex items-center cursor-pointer">
                    <div
                      className={`flex items-center ${
                        like && " text-red-500"
                      } text-sm `}
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
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
