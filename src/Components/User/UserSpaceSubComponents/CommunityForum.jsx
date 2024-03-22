// Forum.js

import React, { useEffect, useState } from 'react';
import '../../../assets/styles/forum.css'; // Import the CSS file for Forum styling
import ForumPost from './ForumPost'; // Import the ForumPost component
import ForumPostCreation from './forumPostCreation';
import ForumFullPost from './forumFullPost';
import PostLoader from '../../Common/Loaders/postLoader';
import { useSearchParams } from 'react-router-dom';
import { useDataContext } from '../../../utils/useContext';

const CommunityForum = () => {
 const {getPosts,getUser,getSavedPosts} =useDataContext();
     console.log("start in feed section");
    const A = window.localStorage.getItem("A") === 'true';
    const [searchParams]=useSearchParams()
    const [savedPosts,setSavedPosts]=useState(false)
    const [myPosts, setMyPosts] = useState(false)
    const [postData,setPostData]=useState(false)
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(true);
    const [user, setUser] = useState({});
    const [postCreated, setPostCreated] = useState(false);

   
  useEffect(() => {
   setTimeout(() => {
     setPostCreated(false);
   }, 3000);
  }, [postCreated]);
       

    useEffect(() => {
 const type=searchParams.get('t')
        const save=searchParams.get('t')=='save'
        const myp=searchParams.get('t')=='myp'
        console.log('==================================page rendered==>'+type+'=============================================')
    const userId = window.localStorage.getItem('userId')
          
            
            
            if (save) {
            const fetchsposts = async () => {
                setLoading(true);
                const sPosts = await getSavedPosts(userId);
                 const filteredPosts = sPosts.filter(
          (post) => post.public === true && post.forum === true
        );
        setSavedPosts(filteredPosts);
                setLoading(false);

            };
            
                fetchsposts();
            }
        
console.log('============================ext:'+'t:'+type)









        
          
    console.log('start in portfolio with useiD is ',userId)
    const fetchUser = async () => {
      setLoading(true);
        const userr = await getUser(userId);
      setUser(userr);
        setLoading(false);
        setActive(userr.active)
    console.log('userr ',userr)
    // console.log('user ',user)

    };
    if (userId) {
    fetchUser();
    }

     
    
    //======
  
   
   
         
        
        

       
       
        
    }, [searchParams])
    useEffect(() => {
         if(!active){setLoading(false)}
        if (active) {
           syncPosts();
        console.log("posts in feed section", postData)
        
        }
        
    },[active,searchParams])
    console.log('active',active)
    const syncPosts = async () => {
        const type=searchParams.get('t')
            
        
    const userId = window.localStorage.getItem('userId')

        console.log("in sync post feed section out",Math.random());
        setLoading(true)
        getPosts().then(postts => {
            console.log("in sync post feed section in", Math.random());
           const filteredPosts = postts.filter(post => post.public === true && post.forum === true);
           const myp = filteredPosts.filter(post => {
                const owner = post.postowner;
                return owner._id == userId
            })
           
            setMyPosts(myp)
            if (!type) {
               setPostData(filteredPosts)
           }
              setLoading(false)
        }).catch(err => {
            console.log(err)
        })
            setLoading(false)
            
     
    }
      const type=searchParams.get('t')
        const save=searchParams.get('t')=='save'
    const myp = searchParams.get('t') == 'myp'
    useEffect(() =>{
       console.log("Myposts",myPosts)
    console.log("savedposts", savedPosts)
   
    if (type) {
        if (save) {
          setPostData(savedPosts)
                setLoading(false);
          
        } else {
        setPostData(myPosts)
                setLoading(false);
            
        }
      } 
                setLoading(false);
      
    },[searchParams,savedPosts])
  return (
    <div className='min-h-screen flex justify-center bg-[#091b28]'>
      <div className='w-[100%] sm:w-[90%] md:w-[70%] lg:w-[60%]'>
              {active?<> 
          <div className="flex flex-col gap-2">
             {!type ?   <ForumPostCreation syncPosts={syncPosts} setPostCreated={setPostCreated} />
           :<div className="mt-5 text-center text-white">{save?'your saved posts':myp?'Your own posts':''}</div>
           }
          
      {postCreated&&<p className='text-white text-center'>your post has been sent to  the community for review.</p>}
        {!loading&&postData ?<div  className="flex flex-col gap-0 ">
        
            {postData.slice().reverse().map((post) => {
                return (
                    <ForumFullPost key={post._id} postt={post} syncPosts={syncPosts} user={user} />)
    
            })}
            </div> : <PostLoader forum={true} />}
            </div></>
                : <p className="p-[100px] font-semibold text-white text-center"> you are not accepted yet wait until we will accept your join request ,after checking your informations</p>}
      </div>
    </div>
  );
};

export default CommunityForum;
