<<<<<<< HEAD
import { HeadNav } from "../Common";
import {  UserSidebar } from "./index.js";
=======
import React, { useState } from "react";
import { Content, UserSidebar, Explore } from "./index.js";
>>>>>>> 635f9a06448d991105886ad63ac22e21ccc7fa28
import { Container, Row, Col } from "react-bootstrap";
import BlogPost from "./UserSpaceSubComponents/blogPost.jsx";

const UserSpaceLayout = () => {

    return(           
        <Container fluid className="bg-gray-50">
            <Row>
                <Col xs={0} md={3} className="sticky top-0 h-full border border-gray-800 bg-white shadow-sm">
                    <UserSidebar/>
                </Col>
                <Col xs={12} md={9}>
                    <BlogPost/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserSpaceLayout;