import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/Images/ensaoimg.jpg';
import image2 from '../../../assets/Images/slider-bg.jpg';
import '../../../assets/styles/activitiesstyle.css';
import LandingNavbar from './LandingNavbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Activities() {

  const navigator = useNavigate();
  const activeMenu = 'activities';


  return (

    <div className='main-container'>
        <LandingNavbar defaultActiveMenuItem={activeMenu}/>
        <div className='activities-container'>
          <div className='events-container'>
            <div class="title-activities">
              <h1>Events</h1>
            </div>

              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Computer Science Day Ed1</h3>
                    <button class="button-37" role="button" onClick={() =>navigator('/activities/event1')}>View More</button>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 1</h3>
                    <button class="button-37" role="button">Read More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 1</h3>
                    <button class="button-37" role="button">Read More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 1</h3>
                    <button class="button-37" role="button">Read More</button>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>
          </div>

          <div className='projects-container'>
              <div class="title-activities">
                <h1>Projects</h1>
              </div>
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 1</h3>
                    <button class="button-37" role="button">Read More</button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 1</h3>
                    <button class="button-37" role="button">Read More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 1</h3>
                    <button class="button-37" role="button">Read More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 1</h3>
                    <button class="button-37" role="button">Read More</button>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>

          </div>


        </div>

        <Footer></Footer>
    </div>
  );
}

export default Activities;
