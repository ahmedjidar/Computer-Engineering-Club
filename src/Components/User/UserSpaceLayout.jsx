import React, { useState } from "react";
import { Content, UserSidebar, Explore } from "./index.js";
import { Container, Row, Col } from "react-bootstrap";

const UserSpaceLayout = () => {

    return(           
        <Container fluid className="bg-gray-50">
            <Row>
                <Col xs={0} md={3} className="sticky top-0 h-full border border-gray-800 bg-white shadow-sm">
                    <UserSidebar/>
                </Col>
                <Col xs={12} md={9}>
                    <Content/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserSpaceLayout;