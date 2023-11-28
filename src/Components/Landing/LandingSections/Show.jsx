import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import grrr from '../../../assets/Images/grrr.png';
import dvc from '../../../assets/Images/grrr.png';
import device from '../../../assets/Images/grrr.png';
import  '../../../assets/styles/show.css' ;

function Show() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineering Club", "Club GI", "Club Genie Informatique"];
  const [text, setText] = useState('');
  const period = 200;
  const [delta, setDelta] = useState(300 - Math.random() * 70);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 3);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <div className="slide-section">

      <Carousel id="customCarousel1" interval={5000} pause={false} indicatorsClassName="custom-indicators">
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={6}>
                <div className="detail-box">
                  <h1>{text}</h1>
                  <p>
                    Welcome to the Software Engineering Student Club! We're a vibrant community of software engineering students dedicated to enhancing skills and fostering innovation. Join us for workshops, hackathons, and networking opportunities to grow your expertise. Connect with like-minded peers and professionals, access exclusive events, and embark on a coding and collaborative journey with us!
                  </p>
                  <Button href="#" variant="primary" className="btn1">
                    Read More
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div className="img-box">
                  <img src={grrr} alt="" className="img-fluid"  />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={6}>
                <div className="detail-box">
                  <h1>Crypto <br/> Currency</h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <Button href="#" variant="primary" className="btn1">
                    Read More
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div className="img-box">
                  <img src={device} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={6}>
                <div className="detail-box">
                  <h1>Crypto <br/> Currency</h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <Button href="#" variant="primary" className="btn1">
                    Read More
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div className="img-box">
                  <img src={dvc} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Show;