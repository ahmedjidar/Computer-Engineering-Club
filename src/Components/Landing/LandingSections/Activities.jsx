import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/Images/ensao.jpg';
import image2 from '../../../assets/Images/slider-bg.jpg';
import picjourne from '../../../assets/Images/picjournée.jpeg'
import picprosolving from '../../../assets/Images/probsolvcover.jpg';
import '../../../assets/styles/activitiesstyle.css';
import LandingNavbar from './LandingNavbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Activities() {

  const navigator = useNavigate();
  const activeMenu = 'activities';


  return ( <>
  <LandingNavbar defaultActiveMenuItem={activeMenu}/>
    <div className='main-container'>
        
        <div className='activities-container'>
          <div className='events-container'>
            <div className="title-activities">
              <h1>Events</h1>
            </div>

              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={picjourne}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names text-md'>CS Day 2022/2023</h3>
                    <button className="button-37" role="button" onClick={() =>navigator('/activities/event1')}>View More</button>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 2</h3>
                    <button className="button-37" role="button">View More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 3</h3>
                    <button className="button-37" role="button">View More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Event 4</h3>
                    <button className="button-37" role="button">View More</button>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>
          </div>

          <div className='projects-container'>
              <div className="title-activities">
                <h1>Projects</h1>
              </div>
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={picprosolving}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Pro Solving ed1</h3>
                    <button className="button-37" role="button">View More</button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Project 2</h3>
                    <button className="button-37" role="button">View More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Project 3</h3>
                    <button className="button-37" role="button">View More</button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className='activities-names'>Project 4</h3>
                    <button className="button-37" role="button">View More</button>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>

          </div>


        </div>

        
    </div>
    <Footer></Footer>
    </>
  );
}

export default Activities;
