import React from "react";
import { HeadNav } from "../../Common";
import Show from "./Show";
import WhyUs from "./WhyUs";
import Team from "./Team";
import Footer from "./Footer";
import Testemonials from "./Testemonials";
import About from "./About";
import LandingNavbar from "./LandingNavbar";

const Home = () => {
    const activeItem = 'home';

    return(
        <div>
            <LandingNavbar defaultActiveMenuItem={activeItem}/>
            <Show/>
            <WhyUs/>
            <About/>
            <Testemonials/>
            <Team/>
            <Footer/>
        </div>
    )
}

export default Home;