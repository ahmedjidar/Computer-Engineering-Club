import { createContext, useContext, useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  // const [toggleNav, setToggleNav] = useState(true);
  // const [projects, setProjects] = useState([]);
  // const [members, setMembers] = useState([]);
  // const [collabs, setCollabs] = useState([]);
  const [auth, setAuth] = useState({
    isLogged: false,
    userId: null,
    userName: null,
    token: null,
    userImg: null,
    email: null,
    isAdmin: null,
  });
  const initiateLogin = () => {
    const isLogged = window.localStorage.getItem("isLogged") === "true"; // Convert to boolean
    const userId = window.localStorage.getItem("userId") || null; // Convert to boolean
    const userImg = window.localStorage.getItem("userImg");
    const userName = window.localStorage.getItem("userName");
    const email = window.localStorage.getItem("email");
    const token = window.localStorage.getItem("token");
    const isAdmin = window.localStorage.getItem("isAdmin");

    // Set the authentication data in state
    setAuth({
      isLogged: isLogged,
      userId: userId,
      userName: userName,
      token: token,
      userImg: userImg,
      email: email,
      isAdmin: isAdmin,
    });
  };
  const setLogin = async (userId, userName, email, userImg, token, isAdmin) => {
    console.log("in usecontext setLogin",userId, userName, email, userImg, token, isAdmin);
    setAuth({
      isLogged: true,
      userId: userId,
      userName: userName,
      token: token,
      userImg: userImg,
      email: email,
      isAdmin: isAdmin,
    });
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("userId", userId);
    window.localStorage.setItem("userImg", userImg);
    window.localStorage.setItem("userName", userName);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("isAdmin", isAdmin);
    window.localStorage.setItem("isLogged", true);
  };
  const logout = async () => {
    setAuth({
      isLogged: false,
      userId: null,
      userName: "",
      userImg: "",
      email: "",
      token: "",
      isAdmin: false,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userImg");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLogged");
  };
  const getauth = async () => {
    const status = (await window.localStorage.getItem("status")) === "true";
    return status;
  };
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const getPosts = async () => {
    console.log("in getPosts");

    try {
        const response = await fetch(apiUrl + "/userSpace/posts");

        if (!response.ok) {
            console.error("Error in fetching posts:", response.statusText);
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        if (data && data.length > 0) {
            console.log("Posts fetched successfully:", data);
            return data;
        } else {
            console.warn("No posts found");
        }
    } catch (err) {
        console.error("Error in getPosts:", err);
        throw err; // Rethrow the error for the caller to handle if necessary
    }

    console.log("Out of getPosts");
};
  const getUser = async (id) => {
    console.log("start in fetch user with id:",id)
    try {
      const response = await fetch(apiUrl + "/user/" + id);

      if (!response.ok) {
        console.log("err ok");
      } else {
        const data = await response.json();
        if (data) {
          console.log("success");
          console.log("userdata", data);
          return data;
        } else {
          console.log("added");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const doLike = async (postId, userId) => {
    console.log("start in do like");
    try {
      // setLoading(true);
      const response = await fetch(
        apiUrl + "/userSpace/post/like/" + postId + "?uId=" + userId,
        {
          method: "POST",
        }
      );

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
      console.log("fetch problem" + error);
    }
  };
 const doCommentLike = async (postId,commentId, userId) => {
    console.log("start in do like");
    try {
      // setLoading(true);
// /posts/:pId/comments/:cId/like

      const response = await fetch(
        apiUrl + `/userSpace/posts/${postId}/comments/${commentId}/like` + "?uId=" + userId,
        {
          method: "POST",
        }
      );

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
      console.log("fetch problem" + error);
    }
  };
  
const doreplyLike = async (postId,commentId,replyId,userId) => {
    console.log("start in do like");
    try {
      // setLoading(true);
// /posts/:pId/comments/:cId/like

      const response = await fetch(
                            //  /posts/:pId/comments/:cId/replies/:rId/likes
        apiUrl + `/userSpace/posts/${postId}/comments/${commentId}/replies/${replyId}/like` + "?uId=" + userId,
        {
          method: "POST",
        }
      );

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
      console.log("fetch problem" + error);
    }
  };
  return (
    <DataContext.Provider
      value={{
        auth,
        getPosts,
        getUser,
        doCommentLike,
        doreplyLike,
        doLike,
        setLogin,
        initiateLogin,
        logout,
        getauth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
