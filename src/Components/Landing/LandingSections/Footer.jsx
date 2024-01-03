import React from 'react'
import '../../../assets/styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    
  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_contact">
            <h4>
              Address
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  ENSAO
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  06............
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  GiClub@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div class="info_social">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_detail">
            <h4>
              Info
            </h4>
            <p>
Empower your GI journey with comprehensive resources, empowering tools, and invaluable mentorship opportunities at our student-made computer science club website.

            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto info_col">
          <div class="info_link_box">
            <h4>
              Links
            </h4>
            <div class="info_links">
              <Link class="active" to="/">
                Home
              </Link>
              <Link class="" to="/about">
                About
              </Link>
              <Link class="" to="/activities">
                Activities
              </Link>
              <Link class="" to="/user/myspace">
                My Space
              </Link>
              <Link class="" to="/team">
                Team
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
    
  </section>


  <section class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/"> Gi Club</a>
      </p>
    </div>
  </section></>
  )
}

export default Footer