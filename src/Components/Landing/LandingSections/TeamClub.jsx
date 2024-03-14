import React from 'react';
import '../../../assets/styles/TeamClub.css';
import LandingNavbar from './LandingNavbar';
import pic1 from '../../../assets/Images/GiFamily.jpg';
import mouadpic from '../../../assets/Images/team-2.jpg';
import hamzapic from '../../../assets/Images/team-4.jpg';

function TeamClub() {
  return (
    <div>

        <LandingNavbar defaultActiveMenuItem={"team"} />
        <div className='imgClub-container'>

            <img src={pic1} alt="Gi Family" />

        </div>

<div className="responsive-container-block outer-container">
  <div className="responsive-container-block inner-container">
    <p className="text-blk section-head-text">
      Executive Team Board For 2023/2024
    </p>
    <p className="text-blk section-subhead-text">
      The Best is Yet To Come in chaa allah 
    </p>
    <div className="responsive-container-block">
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"/>
          </div>
          <p className="text-blk name">
            Imane Legsir
          </p>
          <p className="text-blk position">
            Team Leader
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src={mouadpic}/>
          </div>
          <p className="text-blk name">
            KHARTOUCH Mouad
          </p>
          <p className="text-blk position">
            Vice Team Leader
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"/>
          </div>
          <p className="text-blk name">
            Person
          </p>
          <p className="text-blk position">
          general secretary

          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div className="team-card">
          <div className="img-wrapper">
            <img className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p className="text-blk name">
            Person
          </p>
          <p className="text-blk position">
          treasurer
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>

            {/* -------------- Responsable de Cellules --------------*/}

      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div className="team-card">
          <div className="img-wrapper2">
            <img className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p className="text-blk name">
            Person
          </p>
          <p className="text-blk position">
            Vp Media
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>


      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div className="team-card">
          <div className="img-wrapper2">
            <img className="team-img" src={hamzapic}/>
          </div>
          <p className="text-blk name">
            Khribech Hamza
          </p>
          <p className="text-blk position">
            Vp. Design
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>


      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div className="team-card">
          <div className="img-wrapper2">
            <img className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p className="text-blk name">
            Person
          </p>
          <p className="text-blk position">
            Vp. Logistic
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>


      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div className="team-card">
          <div className="img-wrapper2">
            <img className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p className="text-blk name">
            Person
          </p>
          <p className="text-blk position">
            Vp. Formation
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>

      <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div className="team-card">
          <div className="img-wrapper2">
            <img className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p className="text-blk name">
            Person
          </p>
          <p className="text-blk position">
            Vp. Redaction
          </p>
          <div className="social-media-links">

          </div>
        </div>
      </div>







    </div>
  </div>
</div>

    </div>



  )
}

export default TeamClub ;