import React from 'react'
import '../../../assets/styles/WhyUs.css'
import s1 from '../../../assets/Images/s1.svg'
import s2 from '../../../assets/Images/s2.svg'
import s3 from '../../../assets/Images/s3.svg'


function WhyUs() {
  return (
    <div>
    <section class="service_section layout_padding">
        <div class="service_container">
        <div class="container ">
            <div class="heading_container heading_center">
            <h2>
                WHY <span>US</span>
            </h2>
            <p className='why-presentation'>
            Empower your GI journey with comprehensive resources, empowering tools, and invaluable mentorship opportunities at our student-made computer science club website.
            </p>
            </div>
            <div class="row">
            <div class="col-md-4 ">
                <div class="boxabout ">
                <div class="img-box">
                    <img src={s1} alt="" />
                </div>
                <div class="detail-box">
                    <h5>
                    Empowering Tools
                    </h5>
                    <p>
                    Utilize our innovative task manager tool, personalized roadmaps, and collaborative platforms to enhance your learning experience .
                    </p>

                </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="boxabout ">
                <div class="img-box">
                    <img src={s2} alt="" />
                </div>
                <div class="detail-box">
                    <h5>
                    Mentorship and Connection
                    </h5>
                    <p>
                    Connect with experienced and higher-ranking students and a supportive community, fostering mentorship opportunities , insights and guidance
                    <br></br></p>

                </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="boxabout ">
                <div class="img-box">
                    <img src={s3} alt="" />
                </div>
                <div class="detail-box">
                    <h5>
                    Comprehensive Resources
                    </h5>
                    <p>
                    Access an extensive collection of blog posts, resources, and courses tailored for GIS students, providing a one-stop destination for enriching your knowledge.
                    </p>

                </div>
                </div>
            </div>
            </div>
            <div class="btn-box">
            <a href="">
                View All
            </a>
            </div>
        </div>
        </div>
    </section>

    </div>
  )
}

export default WhyUs