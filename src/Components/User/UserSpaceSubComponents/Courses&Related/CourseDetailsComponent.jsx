import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../../../Constants/courses'; 

const CourseDetailsComponent = () => {
  const { id } = useParams();
  const selectedCourse = courses.find(course => course.id === id);

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
