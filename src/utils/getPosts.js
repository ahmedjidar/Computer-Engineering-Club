const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
 
const getPosts = async () => {
              console.log("in  getposts")

        try {
          const response = await fetch(apiUrl+"/userSpace/posts");

          if (!response.ok) {
            console.log("err ok");
          } else {
            const data = await response.json();
            if (data) {
              console.log("success");
              console.log("syncfunction",data)
              return data;
            } else {
              console.log("added");
            }
          }
        } catch (err) {
          console.log(err)
  }
              console.log("out of getposts")
  
}
const getUser = async (id) => {
        try {
          const response = await fetch(apiUrl+"/user/"+id);

          if (!response.ok) {
            console.log("err ok");
          } else {
            const data = await response.json();
            if (data) {
              console.log("success");
              console.log("userdata",data)
              return data;
            } else {
              console.log("added");
            }
          }
        } catch (err) {
          console.log(err)
        }
}
const doLike = async (postId, userId) => {
  console.log('start in do like')
        try {
  
      // setLoading(true);
      const response = await fetch(apiUrl+"/userSpace/post/like/"+postId+"?uId="+userId, {
        method: "POST",
   
      });

      if (!response.ok) {
        console.log("err ok");
      } else {
        const data = await response.json();
       if (data.success === true) {
            console.log("added in do like");
            // syncPosts();
        }
      }
    } catch (error) {
      console.log("fetch problem"+error);
    }
    }
export default getPosts;
export {doLike};