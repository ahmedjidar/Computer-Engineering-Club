import React from 'react';
import userspic from '../../../assets/Images/users_admin.jpg';
import postspic from '../../../assets/Images/posts_admin2.jpg';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div className="container mt-5">

        {/* <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
            Welcome to Admin Space
        </h1> */}
        <h1 class=" text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-indigo-900 md:text-5xl lg:text-6xl dark:text-white">Welcome To <mark class="px-2 text-white bg-[#2ca44c] rounded dark:bg-[#2ca44c]">Admin</mark> Space</h1>


        <div class="md:flex">
          <div class="p-4 md:w-1/2">
              <div class="bg-white rounded-lg shadow-lg">
                  <img src={postspic} alt="" class="rounded-t-lg" />
                  <div class="p-6">
                      <h2 class="font-bold mb-2 text-2xl text-blue-950">Check Posts</h2>
                      <p class="text-[#2ca44c] mb-2">Access Check Posts</p>
                      <Link to="/user/admin-space/check-posts" class="text-blue-950 hover:text-[#2ca44c] underline text-sm">Go for it 👉</Link>
                  </div>
              </div>
          </div>

          <div class="p-4 md:w-1/2">
              <div class="bg-white rounded-lg shadow-lg">
                  <img src={userspic} alt="" class="rounded-t-lg" />
                  <div class="p-6">
                      <h2 class="font-bold mb-2 text-2xl text-blue-950">Check Users</h2>
                      <p class="text-[#2ca44c] mb-2">Access Check Users</p>
                      <Link to="/user/admin-space/check-users" class="text-blue-950 hover:text-[#2ca44c] underline text-sm">Go for it 👉</Link>
                  </div>
              </div>
          </div>
</div>



    </div>
  )
}

export default AdminHome;