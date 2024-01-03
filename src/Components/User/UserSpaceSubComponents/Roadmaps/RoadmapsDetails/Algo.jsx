import React from 'react';
import how from '../../../../../assets/Images/how.png';
import pattern from '../../../../../assets/Images/pattern.png';
import algorm from '../../../../../assets/Images/algorm.jpg';
import prep from '../../../../../assets/Images/prep.jpg';



function Algo() {
  const sectionStyle = {
    marginBottom: '20px',
  };

  return (
    <div className='algorithmDesc' style={{ 
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ecf0f1',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#00bbf0', ...sectionStyle }}>Algorithm & Roadmap</h1>

      <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>Understanding Algorithms</h3>
      <p style={{ lineHeight: '1.6', ...sectionStyle }}>Algorithms are step-by-step procedures or formulas for solving problems. In the context of web development, algorithms are essential for optimizing code, improving efficiency, and solving complex programming challenges.</p>

      <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>Roadmap for Beginners</h3>
      <p style={{ lineHeight: '1.6', ...sectionStyle }}>If you're just starting your journey in web development and want to delve into algorithms, here's a roadmap to guide you:</p>
      <ol style={{ ...sectionStyle }}>
        <li><strong>Learn the Basics:</strong> Understand the fundamentals of programming languages like JavaScript.</li>
        <li><strong>Data Structures:</strong> Gain proficiency in essential data structures like arrays, linked lists, stacks, and queues.</li>
        <li><strong>Sorting Algorithms:</strong> Study common sorting algorithms such as bubble sort, merge sort, and quicksort.</li>
        <li><strong>Searching Algorithms:</strong> Learn various searching algorithms, including binary search.</li>
        <li><strong>Algorithmic Paradigms:</strong> Explore different algorithmic paradigms like recursion and dynamic programming.</li>
        <li><strong>Practice:</strong> Solve coding challenges on platforms like LeetCode and HackerRank to apply your knowledge.</li>
        <li><strong>Real-world Applications:</strong> Apply algorithms to real-world scenarios, such as optimizing website performance.</li>
      </ol>

      <p style={{ lineHeight: '1.6', ...sectionStyle }}>Remember, mastering algorithms is an ongoing process. Regular practice and hands-on coding experience will significantly contribute to your growth as a developer.</p>
      <img src={algorm} width='40%' style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: 'auto' }}/>
      <h3 style={{marginTop:'50px', fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>How to Solve Problems ?</h3>
      <img src={how} width='60%' style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: 'auto' }}/>
      <img src={prep} width='60%' style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: 'auto' }}/>

      <h3 style={{marginTop:'50px', fontSize: '24px', fontWeight: 'bold', color: '#00204a', ...sectionStyle }}>General Algorithms RoadMap</h3>
      <img src={pattern} width='100%' style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}/>


    </div>
  );
}

export default Algo;
