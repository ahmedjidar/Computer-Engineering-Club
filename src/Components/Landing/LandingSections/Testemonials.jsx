import React from 'react'
import '../../../assets/styles/testemonials.css'
import toumi from '../../../assets/Images/toumi.jpg'
import ennaki from '../../../assets/Images/ennaki.jpg'

function Testemonials() {
  return (
    <>

	<div className='test-presentation'>
		<h1><span className='quotes'>&#8221;</span> Testimonials <span  className='quotes'>&#8221;</span></h1>
		<h5>Dive into the accolades bestowed upon our Computer Science Club website by esteemed professors. These testimonials capture the essence of the students' exceptional work, highlighting the fusion of innovative design and technical prowess. Discover why our website stands as a testament to the dedication and skill of our budding computer scientists.</h5>
	</div>
    <div className='cont-test'>
<div class="testimonials-container">
	
	<div class="fa fa-quote-right fa-quote"></div>
	<div class="fa fa-quote-left fa-quote"></div>
	<p class="testimonial">
"As a professor in the Computer Science department, I am thoroughly impressed with the student-created Computer Science Club website. The site seamlessly integrates cutting-edge design with intuitive navigation, reflecting the students' deep understanding of both programming concepts and user experience. It serves as a testament to their dedication, creativity, and technical prowess. This website not only showcases the club's activities effectively but also stands out as a shining example of the exceptional talent within our student body."</p>
	
  <br />
  <div class="centered-items">
		<img class="logo" src={toumi} alt="logo" />
		<div class="user-details">
			<h4 class="username">Toumi Bouchentouf</h4>
			<p class="role">head of computer engineering sector</p>
		</div>
	</div>
</div>



<div class="testimonials-container">
	
	<div class="fa fa-quote-right fa-quote"></div>
	<div class="fa fa-quote-left fa-quote"></div>
	<p class="testimonial">"I've had the pleasure of reviewing the Computer Science Club website crafted by our students, and it is truly commendable. The attention to detail in implementing functionality, from interactive coding challenges to event registration, demonstrates a high level of technical proficiency. Moreover, the website's sleek and modern design reflects a keen eye for aesthetics. The students have not only developed a valuable resource for the club but have also showcased their ability to apply theoretical knowledge to real-world projects. Kudos to the team for their outstanding work!"</p>
	<div class="centered-items">
		<img class="logo" src={ennaki} alt="logo" />
		<div class="user-details">
			<h4 class="username">Ihab Abdelbasset Annaki</h4>
			<p class="role">Web developement Professor</p>
		</div>
	</div>
</div>

</div>



    </>
  )
}

export default Testemonials