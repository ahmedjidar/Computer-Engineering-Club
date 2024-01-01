import { useState } from "react";

export function Comment({ user, comment }) {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="bg-gray-50 px-2 py-[6px]  ">
        <article className="text-base bg-white px-4 rounded-xl shadow-sm  ">
          <div className="pt-3 flex justify-between items-center mb-2">
            <div className="flex items-center justify-center  gap-2 ">
              <img
                className=" w-8 h-8   rounded-full"
                src={user.img}
                alt={user.name}
              />
              <div className="flex flex-col">
                <p className=" text-gray-700  ">{user.name}</p>

                <p className="  text-xs text-gray-600 dark:text-gray-400 ">
                  <time title="February 8th, 2010">{comment.date}</time>
                </p>
              </div>
            </div>
            <div
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex  items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
              type="button"
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
              {/* <span className="sr-only">Comment settings</span> */}
            </div>

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
          <p className="p-0 m-0 text-gray-600">{comment.text}</p>
          <div className=" w-full flex items-center  p-2">
            <li
              onClick={() => {
                setLike((prv) => !prv);
              }}
              className="flex items-center cursor-pointer"
            >
              <i
                className={`fa-solid fa-heart ${
                  like && " text-red-300"
                } text-sm `}
              />
              <p className="p-0 m-0 text-xs">{comment.likes}</p>
            </li>
          </div>
        </article>
      </div>
    </>
  );
}