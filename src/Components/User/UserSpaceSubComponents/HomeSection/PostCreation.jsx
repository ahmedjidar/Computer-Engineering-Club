import React, { useState } from "react";
import { AddBlogPostModal } from "../../../Common/index";
import pfp from '../../../../assets/Images/pfp.png';
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../../../utils/useContext";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const PostCreation = ({syncPosts}) => {
    // state to handle the modal
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
      const [loading, setLoading] = useState(false);

   const {auth} =useDataContext();

     const submitHandler = async (e) => {
    e.preventDefault();
    // const token = localStorage.getItem('token');
    try {
      const formData = new FormData(e.target);
      setLoading(true);
      const response = await fetch(apiUrl+"/userSpace/post", {
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
            document.getElementById('myForm').reset()
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
    };
    return(
        <div className="p-4">
            <div className="flex gap-2 items-end justify-start mb-2">
                <img 
                    src={apiUrl+"/"+auth.userImg} alt="user" 
                    className="w-12 h-12 rounded-full ring-2 ring-indigo-600  object-cover"
                />
                <p className="text-sm font-medium text-indigo-500 mb-2 bg-indigo-50 p-4 rounded">What do you think about?</p>
            </div>
            {/* add content area */}
            <div className="relative">

                <form id="myForm" onSubmit={submitHandler} encType="multipart/form-data">
                <input type="hidden" name="ownerid" value={auth.userId}/>
                <input type="hidden" name="title" value={"Question!"}/>
                    
                    <textarea name="content" id="postContent" cols="20" rows="5" placeholder="Start a community question"
                        className="resize-none outline-none block w-full rounded-md px-4 py-3 border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"

                    />
                    <div className="absolute bottom-4 left-6 flex items-center gap-2">
                        <button onClick={(e) => {e.preventDefault(); setModalShow(true)}} className="flex items-center gap-2 text-sm text-white bg-indigo-500 rounded px-3 py-2 hover:bg-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            <p>Write a Post</p>
                        </button>
                        <button type="submit" disabled={loading} className="flex items-center gap-2 text-sm text-gray-600 rounded px-3 py-2 hover:bg-slate-100">  {loading? 'posting...':'Post Question'}</button>
                    </div>
                </form>
            </div>
            {/* modal to render */}
            <AddBlogPostModal
                show={modalShow}
                onHide={() => {
                    syncPosts();
                    setModalShow(false)
                }}
            />
        </div>
    )
}

export default PostCreation;

