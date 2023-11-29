import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import '../assets/style/testemonials.css'
import prof1 from '../assets/images/toumi.jpg'
import prof2 from '../assets/images/ennaki.jpg'
import prof3 from '../assets/images/berrich.jpg'


export default function Testemonials() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          The testimonials from educators affirm the impactful role of the student-initiated Computer Science Club. They highlight the club's collaborative learning environment, the dedication of students to mastering computer science through hands-on projects and coding competitions, and the eagerness of students to organize workshops. These testimonials collectively emphasize the club's significant contribution to fostering a dynamic learning community and students' commendable dedication to academic exploration and innovation.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={prof1}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Toumi Bouchentouf</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Impressed by our students' initiative in forming the Computer Science Club. Their collaborative learning and passion for technology are evident in the hands-on projects and vibrant discussions. It's a testament to their commitment to academic exploration.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={prof2}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Ihababdelbasset Annaki</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Proud to endorse the Computer Science Club initiated by our students. Their eagerness to organize workshops and engage in group projects showcases a commitment to personal growth and community. It's a pleasure to witness their academic journey unfold.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={prof3}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Jamal Berrich</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                The Computer Science Club, led by our students, is an integral part of our STEM community. Their coding competitions and projects reflect their dedication to mastering computer science. It's inspiring to see them extend their learning beyond the classroom
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}