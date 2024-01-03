import { useState } from "react";
// import { useSelector } from "react-redux";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export function Commentadd({userImg,syncPosts,userId,postId }) {
  const [content, setContent] = useState("");
  // const [img, setImg] = useState("");
      const [loading, setLoading] = useState(false);

  
  
  const submitHandler = async (e) => {
    e.preventDefault();
    // const token = localStorage.getItem('token');
    try {
      const formData = new FormData(e.target);
       console.log("add coment forndata",formData)
      setLoading(true);
     const response = await fetch(apiUrl+"/userSpace/post/comment", {
     method: "POST",
  headers: {
    "Content-Type": "application/json", // Set the content type to JSON
  },
  body: JSON.stringify({userId:userId,postId:postId,conetnt:content}),   // formData
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
           document.getElementById('myForm').reset()
          // navigate('/admin/projects/'+prjctId);
          console.log("added");
        }
      }
    } catch (error) {
      // setErr("fetch problem");
    }
    };
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
        className="p-3 relative w-full flex items-center justify-start gap-3   rounded"
      >
        <div className=" w-16 h-12 rounded-full overflow-hidden ">
           <img
          className="w-full h-full  object-cover"
          src={apiUrl+"/"+userImg}
        />
        </div>
         <input type="hidden" name="userId" value={userId}/>
          <input type="hidden" name="postId" value={postId}/>
         <input type="text" name="content"
        onChange={(e) => setContent(e.target.value)}
          className="this no w-full bg-gray-100 rounded-full px-3 py-2 border"
          placeholder="write something ..."
        />
        
        <button type="submit" className="m-0 p-0 max-w-fit" >
          {loading ? '...' :
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>


          }
        </button>
      </form>
    </>
  );
}