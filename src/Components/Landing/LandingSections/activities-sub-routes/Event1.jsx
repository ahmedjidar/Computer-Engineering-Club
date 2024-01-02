import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../../../assets/styles/event1details.css';
import image1 from '../../../../assets/Images/ensao.jpg';
import LandingNavbar from '../LandingNavbar';
import mic from '../../../../assets/Images/mic.png' ;
import pic1galery from '../../../../assets/Images/PicsCsDay1.jpg'

function Event1() {

  return (

    <div>
        <LandingNavbar defaultActiveMenuItem={"activities"}/>

        <h2 className='title-event text-green-600'>
                Computer Science Journey  - 2022/2023 
        </h2>

        <div className='infos-activitie rounded p-4 text-sm shadow-sm'>

            <p className='mb-2'>
               <b>Date : </b> 19 / 03 /2023
            </p>

            <p className='mb-2'>
               <b>Lieu : </b> ENSAO, Salle de conférence
            </p>
            <p>
               <b>Thème : </b> Innover ou périr: la révolution de l’IA dans le développement de logiciels
            </p>


            
        </div>

        <div className='galery-container'>
            <div class="title-activities">
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
                    src={image1}
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
                <li className='mb-2'>Expliquer le rôle et l'impact de l'Intelligence
Artificielle dans les différents domaines du
Développement Durable.
                </li>
                <li>
                Organiser des discussions avec des invités experts
pour échanger des informations pertinentes.
                </li>


            </ul>

            {/* <p>
            Le thème
"Innover ou périr : la révolution de l'IA dans le
développement des logiciels (software engineering)"
a
été choisi en raison de l'impact considérable de l'IA sur
le marché du travail et sur les compétences requises
pour travailler dans le domaine du développement de
logiciels. L'IA représente un changement de paradigme
dans la façon dont les logiciels sont conçus,
développés et utilisés, ce qui nécessite des
compétences nouvelles et spécifiques pour tirer le
meilleur parti de cette technologie.

            </p>

            <p>

            Les professionnels de l'informatique doivent être en
mesure de comprendre et de maîtriser les outils et les
techniques de l'IA pour créer des logiciels innovants et
compétitifs. En outre, la capacité des entreprises à
intégrer l'IA dans leur processus de développement de
logiciels peut également avoir un impact sur leur
capacité à attirer et retenir les talents dans ce
domaine. C'
est pourquoi il est essentiel de comprendre
l'impact de l'IA sur le marché du travail et les
compétences requises pour préparer les professionnels
de l'informatique à relever les défis de cette nouvelle
ère de développement de logiciels.
            </p> */}


        </div>

        <div className='Speakers-Guests'>

            <div class="title-activitie">
              <h1>Speakers</h1>
            </div>

            <ul class="speackers">
                <li class="transition">
                    <div class="wrapper rounded shadow-md"> <img class="transition" src="http://dooreight.com/codepen/people/img_01.png"/>

                    <span class="transition">
                    <h3>Abdelilah Jabri <em>Senior Full-stack PHP Developer <em> at Cobbleweb</em></em></h3>
                    <img src={mic}/> </span> </div>
                </li>

                <li class="transition">
                    <div class="wrapper rounded shadow-md"> <img class="transition" src="http://dooreight.com/codepen/people/img_01.png"/>
                    
                    <span class="transition">
                    <h3>Pascal Borreli <em>Consultant Technique <em>at Les-Tilleuls.coop</em> </em></h3>
                    <img src={mic}/> </span> </div>
                </li>

                <li class="transition">
                    <div class="wrapper rounded shadow-md"> <img class="transition" src="http://dooreight.com/codepen/people/img_01.png"/>
                    
                    <span class="transition">
                    <h3>Ilyass Lazaar <em>Unit Manager / IT Architect </em> <em> Frontend & Mobile Specialist</em></h3>
                    <img src={mic}/> </span> </div>
                </li>


            </ul>

        </div>


    </div>
  );
}

export default Event1;