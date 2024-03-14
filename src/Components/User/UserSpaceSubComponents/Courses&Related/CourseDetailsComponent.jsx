import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../../../Constants/courses'; 

const CourseDetailsComponent = () => {
  const { id } = useParams();
  let selectedCourse;

  for (let category in courses) {
    const course = courses[category].find(course => course.id === id);
    
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
          {/* display related content assi khalil (exams, practicals, etc.) for this course */}
        </div>
      )}
    </div>
  );
};

export default CourseDetailsComponent;

