import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import MembersList from "./HomeSection/MembersList";
import PostCreation from "./HomeSection/PostCreation";
import FeedSection from "./HomeSection/FeedSection";
import { useSelector } from "react-redux";
import {fetchPosts} from '/src/Store/blogSlice.js'
import { useDispatch } from "react-redux";
import getPosts from "/src/utils/getPosts.js"

const Home = () => {
//   const dispatch = useDispatch();
//     const postss = useSelector(state => state.posts);
 const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        getPosts().then(posts => {
         setPosts(posts)
         console.log("new posts:", posts);
      }) }, [])
     const syncPosts = async() => {
    //  dispatch(fetchPosts());
     getPosts().then(posts => {
         setPosts(posts)
         console.log("new posts:", posts);
      })

        console.log("synced",posts)
       
}
    return(
            <Row>
                <Col md={8} className="overflow-auto">
                    {/* post creation section */}
                    <Row>
                        <PostCreation syncPosts={syncPosts}/>
                    </Row>
                    {/* feed section */}
                    <Row>
                    <FeedSection posts={posts} syncPosts={syncPosts} />
                    </Row>
                </Col>
                <Col className="sticky top-16 h-full overflow-auto">
                    {/* members section */}
                    <Row>
                        <Col md={12} className="border-l-[1px] border-gray-300 p-2 bg-white">
                            <MembersList/>
                        </Col>
                    </Row>
                    {/* for later: */}
                    {/* suggested section */}
                    <Row></Row>
                    {/* chatbox section */}
                    <Row></Row>
                </Col>
            </Row>
    )
}

export default Home;