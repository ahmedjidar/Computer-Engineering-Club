import React from "react";
import '../../../assets/styles/about.css'
import dvc from '../../../assets/Images/dvc.png'
const About = () => {
    return(
        <div>
                <section class="about_section layout_padding">
    <div class="container  ">
      <div class="heading_container heading_center">
        <h2>
          About <span>Us</span>
        </h2>
        <p>

        Elevate your GI journey with our Computer Science Club—Your Hub for Resources, Courses, Mentors, and More
        </p>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img src={dvc} alt=""/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <h3>
              We Are GI Club
            </h3>
            <p>
            Welcome to our Computer Science Engineering Club's online hub! Explore a dynamic user space designed for innovation and collaboration. Dive into insightful blog posts, stay organized with our task manager tool, access a wealth of resources for diverse courses, and stay in the loop with our interactive calendar. Join us on a journey where technology meets community, fostering a space for learning, sharing, and thriving in the ever-evolving world of computer science engineering.
            </p>
            <p>
            Embark on a digital journey with our Computer Science Club website, meticulously crafted to cater to the dynamic needs of GI students. Immerse yourself in a wealth of resources, including insightful blog posts, curated courses, and a comprehensive repository of materials tailored for your academic voyage. Seamlessly manage your tasks with our intuitive task manager tool, while a carefully designed roadmap guides you through your learning path.
            </p>
            <a href="">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default About;