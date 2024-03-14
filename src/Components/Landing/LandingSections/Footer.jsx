import React from 'react'
import '../../../assets/styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
            <a href="" className='d-flex flex-row' >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30" height="30" >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s-8-6.167-8-11a8 8 0 0 1 16 0c0 4.833-8 11-8 11z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
  <span className='pt-1 ps-1'>ENSAO</span>
</a>
<a href="tel:06............" className='d-flex flex-row'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm-1 4h2v4h-2zm0 6h2v2h-2z"/>
</svg>
  <span className='ps-1'>
    06............
  </span>
</a>

<a href="mailto:GiClub@gmail.com" className='d-flex flex-row'>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="60" height="60" >
	<path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
</svg>

  <span>
    GiClub@gmail.com
  </span>
</a>

            </div>
          </div>
          <div className="d-flex flex-row ">
  <a className="socialContainer containerOne m-2" href="https://www.instagram.com/club_gi_ensao/">
    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
 

  <a className="socialContainer containerThree m-2" href="https://www.linkedin.com/in/club-g%C3%A9nie-informatique-285a652a3/">
    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  
  <a className="socialContainer containerFour m-2" href="https://www.facebook.com/ClubGIENSAO.2021">
    <svg viewBox="0 0 16 16" className="socialSvg facebookSvg" fill="#1877f2"> <path d="M14.188 0H1.813C0.8125 0 0 0.8125 0 1.8125V14.188C0 15.1875 0.8125 16 1.813 16H8V9.8125H6.0312V7.3438H8V5.5938C8 2.9531 9.9688 1.7812 12.125 1.7812C13.1406 1.7812 14 1.875 14 1.875V4H12.7188C11.9688 4 11.625 4.5938 11.625 5.3438V7.3438H13.8125L13.4062 9.8125H11.625V16H14.188C15.1875 16 16 15.1875 16 14.188V1.8125C16 0.8125 15.1875 0 14.188 0Z"> </path> </svg>
</a>


</div>             


        </div>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_detail">
            <h4>
              Info
            </h4>
            <p>
Empower your GI journey with comprehensive resources, empowering tools, and invaluable mentorship opportunities at our student-made computer science club website.

            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto info_col">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <Link className="active" to="/">
                Home
              </Link>
              <Link className="" to="/about">
                About
              </Link>
              <Link className="" to="/activities">
                Activities
              </Link>
              <Link className="" to="/user/myspace">
                My Space
              </Link>
              <Link className="" to="/team">
                Team
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
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


  <section className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/"> Gi Club</a>
      </p>
    </div>
  </section></>
  )
}

export default Footer