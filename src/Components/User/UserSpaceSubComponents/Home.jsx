import React from "react";
import { Row, Col } from "react-bootstrap";
import MembersList from "./HomeSection/MembersList";
import PostCreation from "./HomeSection/PostCreation";
import FeedSection from "./HomeSection/FeedSection";

const Home = () => {
    return(
            <Row>
                <Col md={8} className="overflow-auto">
                    {/* post creation section */}
                    <Row>
                        <PostCreation/>
                    </Row>
                    {/* feed section */}
                    <Row>
                        <FeedSection/>
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