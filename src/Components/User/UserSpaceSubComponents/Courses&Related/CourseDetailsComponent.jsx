import React from 'react';
import { useParams, Link } from 'react-router-dom';
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

  // Array of colors
  const colors = ["#FFC0CB", "#ADD8E6", "#90EE90", "#FFA07A", "#87CEFA", "#FFD700"];

  return (
    <div className='p-4 mx-4'>
      <Link to="/user/courses" className="text-blue-500 hover:text-blue-600 mb-4 flex ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>Go back
      </Link>
      {/* Added Go back button */}
      {selectedCourse && (
        <div>
          {/* <p className='text-xl font-semibold'>{selectedCourse.title}</p> */}
          <div>
            <ul className='flex justify-evenly flex-wrap'>
              {selectedCourse.modules.map((module, index) => (
                <li key={index} className='p-3 m-3'>
                  <a href={module.link} target="_blank" rel="noopener noreferrer">
                    <div className="div h-[10em] w-[17em] bg-white flex mx-2 rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-md" style={{ backgroundColor: colors[index % colors.length], position: "relative" }}>
                      <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#2ca44c] group-hover:scale-[800%] duration-500 z-[-1] op"></div>
                      <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                      
                      <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">{module.name}</h1>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsComponent;
