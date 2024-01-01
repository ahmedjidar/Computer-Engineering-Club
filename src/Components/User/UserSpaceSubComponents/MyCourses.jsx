import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'

const options = [
  { value: 'Genie-Informatique-3', label: 'Genie Informatique 3' },
  { value: 'Genie-Informatique-4', label: 'Genie Informatique 4' },
  { value: 'Genie-Informatique-5', label: 'Genie Informatique 5' }
]

const MyCourses = () => {

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
                    <Select options={options} className="w-full px-4 py-2 rounded-md"/>
                </div>
            </div>

            {/* courses */}
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src="https://www.datocms-assets.com/48401/1628644950-javascript.png" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
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