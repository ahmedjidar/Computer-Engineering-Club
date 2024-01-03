import { useState } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

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
                src={apiUrl+"/"+user.image}
                alt={user.image}
              />
              <div className="flex flex-col">
                <p className=" text-gray-700  ">{user.username}</p>

                <p className="  text-xs text-gray-600 dark:text-gray-400 ">
                  <time title="February 8th, 2010"></time>
                </p>
              </div>
            </div>
            <div
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex  items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>

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
          <p className="p-0 m-0 text-gray-600">{comment}</p>
          <div className=" w-full flex items-center  p-2">
            <li
              onClick={() => {
                setLike((prv) => !prv);
              }}
              className="flex items-center cursor-pointer"
            >

              <div
                className={`flex items-center ${
                  like && " text-red-300"
                } text-sm `}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="01.5" stroke="currentColor" className="w-3 h-3 p-0 m-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              <p className="p-0 m-0 text-xs">0</p>

              </div>
            </li>
          </div>
        </article>
      </div>
    </>
  );
}