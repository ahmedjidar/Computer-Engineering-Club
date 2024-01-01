import React from 'react';
import fs from '../../../../../assets/Images/fs.jpeg';
import all from '../../../../../assets/Images/all.jpeg';

function WebDev() {
  const sectionStyle = {
    marginBottom: '20px', // Adjust the spacing as needed
  };

  return (
    <div className='webDesc' style={{ 
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ecf0f1', /* Light gray background color */
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#00bbf0', ...sectionStyle }}>Web Dev</h1>

        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>Introduction</h3>
        <p style={{ lineHeight: '1.6', ...sectionStyle }}>In the ever-evolving landscape of technology, the role of a Full Stack Developer has emerged as one of great significance. As we venture into 2023, the demand for Full Stack Developers who can navigate the intricate realms of both front-end and back-end development has reached unprecedented heights and to in early 2024, this number will increase even more. This article serves as a comprehensive guide for aspiring Full Stack Developers, detailing the skills required and the roadmap to attain mastery in this domain.</p>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>Defining the Full Stack Developer</h3>
        <p style={{ lineHeight: '1.6', ...sectionStyle }}>A Full Stack Developer is a consummate professional proficient in orchestrating the development of both the front-end (client software) and back-end (server software) components of a website or web application. This encompasses everything from crafting the user interface to managing databases and servers. In essence, a Full Stack Developer takes on the role of a digital architect, overseeing the entire lifecycle of a web application.</p>
        <img src={fs} width={500} style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', ...sectionStyle }}/>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>Front-end Technologies</h3>
        <p style={{ lineHeight: '1.6', ...sectionStyle }}>The front end of an application constitutes the graphical user interface that users interact with, including layouts, buttons, and text elements. Mastery of basic front-end technologies is essential. These include:</p>
        <h4 style={{ fontSize: '18px', ...sectionStyle }}>
          1. HTML: The foundation for structuring website content.<br/>
          2. CSS: Responsible for layout and styling, enhancing user experience.<br/>
          3. JavaScript: Empowers front-end elements with interactive functionalities.
        </h4>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>Back-end Technologies</h3>
        <p style={{ lineHeight: '1.6', ...sectionStyle }}>Back-end development involves server-side processes, where everything transpires behind the scenes, hidden from users’ view. Focus on databases, website architecture, and scripting. Key back-end technologies include:</p>
        <h4 style={{ fontSize: '18px', ...sectionStyle }}>
          1. Java: Ideal for building enterprise-scale web applications.<br/>
          2. Python: Prized for data analysis and visualization.<br/>
          3. SQL: A vital database query language for back-end data management.<br/>
          4. PHP: Widely adopted for data management and handling frontend requests.
        </h4>
        <img src={all} width='100%' style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', ...sectionStyle }}/>
    </div>
  );
}

export default WebDev;
