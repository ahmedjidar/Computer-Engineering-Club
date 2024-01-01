import React from 'react';
import prg from '../../../../../assets/Images/prg.jpeg';

const ProgrammingLanguagesDetails = () => {
  return (
    <div style={coolTextContainerStyle}>
      <h1 style={headerStyle}>Programming Languages Roadmap</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Start with a Beginner-Friendly Language:</strong>
          <ul style={nestedListStyle}>
            <li><span style={highlightStyle}>Python:</span> Its clear syntax and readability make it an excellent choice for beginners. You can quickly grasp programming concepts without getting bogged down by complex syntax.</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Understand Basic Programming Concepts:</strong>
          <ul style={nestedListStyle}>
            <li>Learn about variables, data types, loops, conditionals, and functions.</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Explore Object-Oriented Programming (OOP):</strong>
          <ul style={nestedListStyle}>
            <li><span style={highlightStyle}>Java or C#:</span> Both are strongly-typed, object-oriented languages. Understanding OOP principles is essential for building scalable and modular software.</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Dabble in Low-Level Programming:</strong>
          <ul style={nestedListStyle}>
            <li><span style={highlightStyle}>C:</span> To gain a deeper understanding of memory management and how computers work at a lower level.</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Data Structures and Algorithms:</strong>
          <ul style={nestedListStyle}>
            <li>Implement common data structures (arrays, linked lists, trees) and algorithms in the language of your choice.</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Explore System-Level Programming:</strong>
          <ul style={nestedListStyle}>
            <li><span style={highlightStyle}>C++:</span> Widely used in game development, system programming, and performance-critical applications.</li>
          </ul>
        </li>
        {/* ... (continue with the rest of the content) */}
      </ul>
      <p style={paragraphStyle}>
        Remember that this roadmap is just a guide, and you can adjust it based on your interests and goals. The most important thing is to gain a strong foundation in programming concepts, understand the strengths and weaknesses of different languages, and apply your knowledge through hands-on projects.
      </p>

      <img src={prg} width="100%" style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} />
    </div>
  );
};

// Inline styles
const coolTextContainerStyle = {
  maxWidth: '1400px',
  margin: '10px auto',
  padding: '20px',
  backgroundColor: '#ecf0f1', // AliceBlue
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const listStyle = {
  listStyleType: 'none',
  color: '#00204a',
  padding: '0',
};

const listItemStyle = {
  marginBottom: '15px',
};

const nestedListStyle = {
  marginLeft: '20px',
};

const headerStyle = {
  color: '#00bbf0', // Green
  textAlign: 'center',
  fontSize: '28px',
  fontWeight: 'bold',

};

const highlightStyle = {
  color: '#ff5722', // DeepOrange
  fontWeight: 'bold',
};

const paragraphStyle = {
  textAlign: 'justify',
  color: '#333',
  lineHeight: '1.6', // Added line height for spacing between lines
};

export default ProgrammingLanguagesDetails;
