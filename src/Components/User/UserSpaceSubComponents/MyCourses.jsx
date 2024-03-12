import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import { Link } from "react-router-dom";

const MyCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState(({ value: "Genie Informatique 3", label: "Genie Informatique 3" }));

  // Define courses for each category
  const coursesByCategory = {
    "Genie Informatique 3": [
      {
        id: '1',
        title: 'S5',
        description: 'Learn the basics of programming.',
        imageUrl: 'https://via.placeholder.com/150',
        folderLink:'https://drive.google.com/drive/folders/1lMN81VkRXHEF23Dw8_-AlpDIEcCQyBdP'
      },
      {
        id: '2',
        title: 'S6',
        description: 'Explore data structures and algorithms.',
        imageUrl: 'https://via.placeholder.com/150',
        folderLink:'https://drive.google.com/drive/folders/1lMN81VkRXHEF23Dw8_-AlpDIEcCQyBdP'

      },
    ],
    "Genie Informatique 4": [
      {
        id: '3',
        title: 'S7',
        description: 'Learn object-oriented programming concepts.',
        imageUrl: 'https://via.placeholder.com/150',
        folderLink:'https://drive.google.com/drive/home'

      },
      {
        id: '4',
        title: 'S8',
        description: 'Introduction to database management systems.',
        imageUrl: 'https://via.placeholder.com/150',
        folderLink:'https://drive.google.com/drive/home'

      },
    ],
    "Genie Informatique 5": [
      {
        id: '5',
        title: 'S9',
        description: 'Learn web development technologies.',
        imageUrl: 'https://via.placeholder.com/150',
        folderLink:'https://drive.google.com/drive/spam'

      },
   
    ],
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <div className="p-4">
      {/* search bar */}
      <div className="w-full h-auto flex items-center justify-around gap-4 mb-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Search..."
          />
          <button className="absolute inset-y-0 right-0 px-4 font-medium text-blue-500 hover:text-blue-600 focus:outline-none">
            Search
          </button>
        </div>
        <div className="w-1/2 flex items-center">
          <p className="text-base">Category:</p>
          <Select
            options={Object.keys(coursesByCategory).map(category => ({ value: category, label: category }))}
            className="w-full px-4 py-2 rounded-md"
            onChange={handleCategoryChange}
            value={selectedCategory}
          />
        </div>
      </div>

      {/* courses */}
      <Row xs={1} md={3} className="g-4">
        {selectedCategory && coursesByCategory[selectedCategory.value].map((course) => (
          <Col key={course.id}>
            <a href={course.folderLink}>
              <Card>
                <Card.Img variant="top" src={course.imageUrl} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>
              </Card>
              </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyCourses;
