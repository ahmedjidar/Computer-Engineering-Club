/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../../../assets/styles/event1details.css';
import image1 from '../../../../assets/Images/ensao.jpg';
import LandingNavbar from '../LandingNavbar';
import mic from '../../../../assets/Images/mic.png' ;
import pic1galery from '../../../../assets/Images/PicsCsDay1.jpg'
import guestsPic1 from '../../../../assets/Images/Boussabat_pic.jpg';
import guestsPic2 from '../../../../assets/Images/Masaaf_pic.jpg';
import guestsPic3 from '../../../../assets/Images/Houssam_pic.jpg';
import csdaypic1 from '../../../../assets/Images/CsdayPic.jpg';
import csdaypic2 from '../../../../assets/Images/CsDayPic2.jpg';



function Event3() {

  return (

    <div>
        <LandingNavbar defaultActiveMenuItem={"activities"}/>

        <h2 className='title-event text-green-600'>
                Computer Science Journey  - 2023/2024 
        </h2>

        <div className='infos-activitie rounded p-4 text-sm shadow-sm'>

            <p className='mb-2'>
               <b>Date : </b> 03 / 03 /2023
            </p>

            <p className='mb-2'>
               <b>Lieu : </b> ENSAO, Salle de conférence
            </p>
            <p>
               <b>Thème : </b> Futurs métiers Informatique
            </p>


            
        </div>

        <div className='galery-container'>
            <div className="title-activities">
              <h1>Galery</h1>
            </div>

              <Carousel fade className='act'>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pic1galery}
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={csdaypic1}
                    alt="Second slide"
                  />

                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={csdaypic2}
                    alt="Second slide"
                  />
   
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                  />

                </Carousel.Item>

              </Carousel>
          </div>


        <div className='Goals-activitie rounded p-4 text-sm shadow-sm'>

            <h3>
                Objectifs :
            </h3>

            <ul>

                <li className='mb-2'>Permettre aux étudiants qui envisagent des choix
de carrière et aux débutants de découvrir la filière
et ses différentes branches en leur fournissant des
informations actualisées sur l'état du marché.
                </li>
                <li className='mb-2'>Examiner et comprendre les tendances technologiques actuelles
et émergentes qui façonnent le paysage des futurs métiers de
l'informatique.
                </li>
                <li className='mb-2'>
                Mettre en évidence les compétences cruciales nécessaires pour
exceller dans les domaines en évolution constante tels que
l'Intelligence Artificielle, Salesforce , le DevOps, le MalOps, etc.
                </li>
                <li>
                Organiser des discussions avec des invités experts
pour échanger des informations pertinentes.
                </li>


            </ul>

        </div>

        <div className='Speakers-Guests'>

            <div className="title-activitie">
              <h1>Speakers</h1>
            </div>

            <ul className="speackers">
                <li className="transition">
                    <div className="wrapper rounded shadow-md"> <img className="transition" src={guestsPic1}/>

                    <span className="transition">
                    <h3>Badr Boussabat <em>Senior Full-stack PHP Developer <em> at Cobbleweb</em></em></h3>
                    <img src={mic} className='object-cover'/> </span> </div>
                </li>

                <li className="transition">
                    <div className="wrapper rounded shadow-md"> <img className="transition" src={guestsPic2}/>
                    
                    <span className="transition">
                    <h3>Mohssine Masaaf<em>Consultant Technique <em>at Les-Tilleuls.coop</em> </em></h3>
                    <img src={mic} className='object-cover'/> </span> </div>
                </li>

                <li className="transition">
                    <div className="wrapper rounded shadow-md"> <img className="transition" src={guestsPic3}/>
                    
                    <span className="transition">
                    <h3>Houssam Saoudi <em>Unit Manager / IT Architect </em> <em> Frontend & Mobile Specialist</em></h3>
                    <img src={mic} className='object-cover'/> </span> </div>
                </li>


            </ul>

        </div>


    </div>
  );
}

export default Event3;