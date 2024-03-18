import React from 'react';
import postspic from '../../../assets/Images/users_admin.jpg';
import userspic from '../../../assets/Images/posts_admin2.jpg';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div className="container mt-5">

        {/* <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
            Welcome to Admin Space
        </h1> */}
        <h1 className=" text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-indigo-900 md:text-4xl lg:text-5xl">Welcome To <mark className="px-2 text-white bg-[#2ca44c] rounded dark:bg-[#2ca44c]">Admin</mark> Space</h1>


        <div className="md:flex justify-content-evenly">
          <Link to="/user/admin-space/check-posts" className="p-4 md:w-1/3 duration-700 transform hover:scale-110 motion-reduce:transform-none">
              <div className="bg-white rounded-lg shadow-lg">
                  <img src={postspic} alt="" className="rounded-t-lg" />
                  <div className="p-6">
                      <h2 className="text-center font-bold mb-2 text-2xl text-blue-950">Check Posts</h2>
                  </div>
              </div>
          </Link>

          <Link to="/user/admin-space/check-users" className="p-4 md:w-1/3 duration-700 transform hover:scale-110 motion-reduce:transform-none">
              <div className="bg-white rounded-lg shadow-lg">
                  <img src={userspic} alt="" className="rounded-t-lg" />
                  <div className="p-6">
                      <h2 className="text-center font-bold mb-2 text-2xl text-blue-950">Check Users</h2>
                  </div>
              </div>
          </Link>

          
</div>



    </div>
  )
}

export default AdminHome;