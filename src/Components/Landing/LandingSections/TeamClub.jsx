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

<div class="responsive-container-block outer-container">
  <div class="responsive-container-block inner-container">
    <p class="text-blk section-head-text">
      Executive Team Board For 2023/2024
    </p>
    <p class="text-blk section-subhead-text">
      The Best is Yet To Come in chaa allah 
    </p>
    <div class="responsive-container-block">
      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div class="team-card">
          <div class="img-wrapper">
            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"/>
          </div>
          <p class="text-blk name">
            Imane Legsir
          </p>
          <p class="text-blk position">
            Team Leader
          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div class="team-card">
          <div class="img-wrapper">
            <img class="team-img" src={mouadpic}/>
          </div>
          <p class="text-blk name">
            KHARTOUCH Mouad
          </p>
          <p class="text-blk position">
            Vice Team Leader
          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div class="team-card">
          <div class="img-wrapper">
            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"/>
          </div>
          <p class="text-blk name">
            Person
          </p>
          <p class="text-blk position">
          general secretary

          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div class="team-card">
          <div class="img-wrapper">
            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p class="text-blk name">
            Person
          </p>
          <p class="text-blk position">
          treasurer
          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>

            {/* -------------- Responsable de Cellules --------------*/}

      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div class="team-card">
          <div class="img-wrapper2">
            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p class="text-blk name">
            Person
          </p>
          <p class="text-blk position">
            Vp Media
          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>


      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div class="team-card">
          <div class="img-wrapper2">
            <img class="team-img" src={hamzapic}/>
          </div>
          <p class="text-blk name">
            Khribech Hamza
          </p>
          <p class="text-blk position">
            Vp. Design
          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>


      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div class="team-card">
          <div class="img-wrapper2">
            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p class="text-blk name">
            Person
          </p>
          <p class="text-blk position">
            Vp. Logistic
          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>


      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div class="team-card">
          <div class="img-wrapper2">
            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p class="text-blk name">
            Person
          </p>
          <p class="text-blk position">
            Vp. Formation
          </p>
          <div class="social-media-links">

          </div>
        </div>
      </div>

      <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container2">
        <div class="team-card">
          <div class="img-wrapper2">
            <img class="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p class="text-blk name">
            Person
          </p>
          <p class="text-blk position">
            Vp. Redaction
          </p>
          <div class="social-media-links">

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