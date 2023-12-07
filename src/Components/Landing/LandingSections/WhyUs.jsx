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
                    Team Spirit
                    </h5>
                    <p>
                    when you're part of this club it here where start the feeling of pride and loyalty of belonging ,
                    we "learn" , "share experiences" , "moments of joy" Together
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
                    Passion
                    </h5>
                    <p>
                    to reach your goal, you have to find the why and ours is the passion, as computer engineering students there is one passion that brings us together,
                     join us to discover it                    
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
                    One goal
                    </h5>
                    <p>
                    neat and efficient work requires a clear objective and ours 
                    is to share our knowledge with all possible methods
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