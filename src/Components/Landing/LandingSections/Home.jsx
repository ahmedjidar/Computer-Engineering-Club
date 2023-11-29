import React from "react";
import { HeadNav } from "../../Common";
import Show from "./Show";
import WhyUs from "./WhyUs";
import Team from "./Team";
import Footer from "./Footer";
import Testemonials from "./Testemonials";
import About from "./About";

const Home = () => {
    return(
        <div>
            <HeadNav></HeadNav>
            <Show></Show>
            <WhyUs></WhyUs>
            <About></About>
            <Testemonials></Testemonials>
            <Team></Team>
            <Footer></Footer>
        </div>
    )
}

export default Home;