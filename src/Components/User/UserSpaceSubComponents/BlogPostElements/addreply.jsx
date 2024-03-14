import { useState } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export function AddRepley({userImg,syncPosts,userId,postId,commentId }) {
  const [content, setContent] = useState("");
  // const [img, setImg] = useState("");
      const [loading, setLoading] = useState(false);

  
  
  const submitHandler = async (e) => {
    e.preventDefault();
    // const token = sessionStorage.getItem('token');
    try {
      const formData = new FormData(e.target);
       console.log("add coment forndata",formData)
      setLoading(true);
     const response = await fetch(apiUrl+"/userSpace/post/comment/reply", {
     method: "POST",
  headers: {
    "Content-Type": "application/json", // Set the content type to JSON
  },
  body: JSON.stringify({userId:userId,postId:postId,commentId:commentId,content:content}),   // formData
});

      if (!response.ok) {
        setLoading(false);
        console.log("err ok");
      } else {
        const data = await response.json();
        if (data.success === true) {
          // setErr(data.message);
          setLoading(false);
          setContent(``);
            syncPosts();
          
        } else if (data.success === false) {
          setLoading(false);
           setContent(``);
          console.log("added");
        }
      }
    } catch (error) {
      // setErr("fetch problem");
    }
  };
  console.log("img",userImg)
  return (
    <>
      {/* <form onSubmit={submitHandler} >
         <input type="hidden" name="userId" value={userId}/>
          <input type="hidden" name="postId" value={postId}/>
         <input type="text" name="content"
         
          className="this no w-full bg-gray-100 rounded-full px-3 py-2 border"
          placeholder="write something ..."
        />
        <button>s</button>
      </form> */}
      <form id="myForm"
       onSubmit={submitHandler} 
        className="p-1 md:px-3  w-full flex items-center justify-center gap-2 rounded"
      >
        <div className=" rounded-full  overflow-hidden ">
           <img
          className="w-8 h-8   rounded-full object-cover"
          src={apiUrl+"/"+userImg}
        />
        </div>
         <input type="hidden" name="userId" value={userId}/>
          <input type="hidden" name="postId" value={postId}/>
          <input type="hidden" name="commentId" value={commentId}/>
         <input type="text" name="content" value={content}
          onChange={(e) => {setContent(e.target.value)}}
          className="this no h-8 w-[80%] bg-gray-100 rounded-full px-3 m-0 p-0 py-2 border"
          placeholder="write something ..."
        />
        <button type="submit" className="m-0 p-0 max-w-fit" >
          {loading ? '...' :
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 text-gray-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>


          }
        </button>
      </form>
    </>
  );
}