import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import categories from '../../../Constants/categories';
import courses from '../../../Constants/courses'

const MyCourses = () => {
  const [myCourses, setMyCourses] = useState(courses);

    return(
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
                    <Select options={categories} className="w-full px-4 py-2 rounded-md"/>
                </div>
            </div>

            {/* courses */}
            <Row xs={1} md={3} className="g-4">
              {courses.map((course, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src={course.imageUrl}/>
                    <Card.Body>
                      <Card.Title>{course.title}</Card.Title>
                      <Card.Text>
                          {course.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </div>
    )
}

export default MyCourses;