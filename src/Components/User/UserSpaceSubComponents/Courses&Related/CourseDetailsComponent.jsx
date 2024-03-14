import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../../../Constants/courses'; 

const CourseDetailsComponent = () => {
  const { id } = useParams();
  let selectedCourse;

  // Iterate over each category in courses
  for (let category in courses) {
    // Find the course with the matching id in the current category
    const course = courses[category].find(course => course.id === id);
    
    // If a course was found, assign it to selectedCourse and break the loop
    if (course) {
      selectedCourse = course;
      break;
    }
  }

  return (
    <div className='p-4'>
      {selectedCourse && (
        <div>
          <p className='text-xl font-semibold'>{selectedCourse.title}</p>
          {/* display related content (exams, practicals, etc.) for this course */}
        </div>
      )}
    </div>
  );
};

export default CourseDetailsComponent;

