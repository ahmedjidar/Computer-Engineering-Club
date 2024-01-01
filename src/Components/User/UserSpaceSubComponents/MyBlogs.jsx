import React, { useState } from "react";
import posts from '../../../Constants/userPosts'
import Dropdown from 'react-bootstrap/Dropdown';


const MyBlogs = () => {
    const [blogs, setBlogs] = useState(posts);
    const [openStates, setOpenStates] = useState({});

    const toggleDropdown = (postId) => {
      setOpenStates({
        ...openStates,
        [postId]: !openStates[postId]
      });
    };

    // const handleMouseOut = (postId) => {
    //   setOpenStates({
    //     ...openStates,
    //     [postId]: false
    //   });
    // };

    return(
        <div className="bg-white p-4">
          <div className="">
            <div className="mb-2">
              <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">My blogs</p>
              <p className="mt-2 text-base text-gray-400">
                Personal blogs up to the date of your last session
              </p>
            </div>
            <button className="bg-green-50 font-medium text-green-600 text-sm rounded px-3 py-2 focus:ring-2 focus:ring-green-600">Add Post</button>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="hover:bg-violet-50 rounded ring-2 ring-blue-600 p-4 flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center justify-between gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                    {/* post setting */}
                    {/* Dropdown for each post */}
                    <div className="relative">
                      <svg
                        onMouseEnter={() => toggleDropdown(post.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-gray-600 cursor-pointer hover:text-gray-900"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                      </svg>

                    {openStates[post.id] && (
                      <ul className="absolute shadow-md border-1 border-gray-300 right-0 px-3 py-2 bg-white rounded text-sm font-normal z-10">
                        <li className="my-2 px-3 py-2 hover:text-orange-600 hover:bg-orange-50 hover:rounded cursor-pointer">Update</li>
                        <li className="px-3 py-2 hover:text-red-600 hover:bg-red-50 hover:rounded cursor-pointer">Remove</li>
                      </ul>
                    )}
                  </div>

                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full object-cover bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
      </div>
    )
}

export default MyBlogs;