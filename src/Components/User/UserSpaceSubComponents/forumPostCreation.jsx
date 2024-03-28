/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { AddBlogPostModal } from "../../Common/index";
// import pfp from "../../../../assets/Images/pfp.png";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../../utils/useContext";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const ForumPostCreation = ({ syncPosts ,setPostCreated}) => {
  // state to handle the modal
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const { auth } = useDataContext();

  const submitHandler = async (e) => {
    e.preventDefault();
    // const token = localStorage.getItem('token');
    try {
      const formData = new FormData(e.target);
      setLoading(true);
      const response = await fetch(apiUrl + "/userSpace/post", {
        method: "POST",
        body: formData,

        // headers: {
        //   'Authorization': 'Bearer ' + token,
        // },
      });

      if (!response.ok) {
        setLoading(false);
        console.log("err ok");
      } else {
        const data = await response.json();
        if (data.success === true) {
          // setErr(data.message);
          setLoading(false);
          document.getElementById("myForm").reset();
          syncPosts();
        } else if (data.success === false) {
          setLoading(false);
          // navigate('/admin/projects/'+prjctId);
          console.log("added");
        }
      }
    } catch (error) {
      // setErr("fetch problem");
    }
    setPostCreated(true)
  };
  return (
    <div className="p-4">
      <div className="flex gap-2 items-end justify-start mb-2">
        <img
          src={auth.userImg}
          alt="user"
          className="w-12 h-12 rounded ring-2 ring-indigo-600  object-cover"
        />
        <p className="text-sm font-medium text-indigo-500 mb-2  p-4 rounded">
          What technical inquiry do you have?
        </p>
      </div>
      {/* add content area */}
      <div className="relative ">
        <form
          id="myForm"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <input type="hidden" name="ownerid" value={auth.userId} />
          <input type="hidden" name="forum" value={true} />
          {/* <input type="hidden" name="title" value={"Question!"} /> */}
          <div className=" flex flex-col gap-1">

            <input type="text" name='title' required class="resize-none outline-none block w-full  rounded-t-md px-3 py-[10px] border-0 text-gray-100 ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 bg-[#10213a]  focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder=" A breif title of your question"  />
         <textarea
            name="content"
            id="postContent"
            cols="20"
              rows="5"
              required
            placeholder="Start a technical question"
            className="resize-none outline-none block w-full rounded-b-md px-4 py-3 border-0 text-gray-100 ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 bg-[#10213a]  focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
          </div>
        
          <div className="absolute  w-full pr-[50px] bottom-4 left-6 flex justify-end items-center gap-2">
          
          
            {/* <select name="title"
              className="flex items-center gap-2 text-sm  text-blue-500 rounded px-3 py-2 hover:bg-gray-200"
            >
              <option selected>Question</option>
              <option value="Offre de Stage">Offre de Stage</option>
              <option value="Salutation">Salutation</option>
              <option value="Informaton">Snformaton</option>
              <option value="News">News</option>
              </select> */}
             
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 border-gray-500 bg-blue-500 text-sm text-white rounded px-4 py-2 hover:bg-blue-700  "
            >
              {" "}
              {loading ? "sending..." : "Ask"}
            </button>
          </div>
        </form>
      </div>
      {/* modal to render */}
      
    </div>
  );
};

export default ForumPostCreation;
