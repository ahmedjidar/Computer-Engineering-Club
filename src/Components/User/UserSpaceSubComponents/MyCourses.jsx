import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import { Link } from "react-router-dom";
import courses from "../../../Constants/courses"

const MyCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState({ value: "Genie Informatique 3", label: "Genie Informatique 3" });

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  // Filter courses based on selected category
  const filteredCourses = courses[selectedCategory.value] || [];

  return (
    <div className="p-4">
      {/* search bar */}
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-around gap-4 mb-4">
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
          <p className="text-base">Year</p>
          <Select
            options={Object.keys(courses).map(category => ({ value: category, label: category }))}
            className="w-full px-4 py-2 rounded-md"
            onChange={handleCategoryChange}
            value={selectedCategory}
          />
        </div>
      </div>
      <Row xs={1} md={3} className="g-4 flex justify-content-evenly md:mt-7">
        {filteredCourses.map((course, idx) => (
          <Col key={idx} xs={12} md={4}>
            <Link to={`/user/courses/${course.id}`}>
              <div className="group flex flex-col justify-start items-start gap-2 w-full h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200" alt="image here"></div>
                <div className="">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">{course.title}</h2>
                  <p className="text-gray-700 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis
                    magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id
                    porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.
                    Pellentesque maximus posuere tortor vitae consequat.
                  </p>
                </div>
                <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">Explore</button>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyCourses;
