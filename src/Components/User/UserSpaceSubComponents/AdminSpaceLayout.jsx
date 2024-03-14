import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import AdminDashboard from "./AdminDashboard.jsx";
import AdminSidebar from "./AdminSidebar.jsx";
import { Outlet } from "react-router-dom";

const AdminSpaceLayout = () => {
    //states
    const [showSidebar, setShowSidebar] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 2000);
  
    // here i tracked the screen size to display the toggle button based on the screen dimensions
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 2000);
        setShowSidebar(false); // Hide sidebar when screen size changes
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    // toggle the sidebar once the button is clicked
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
      };

    return(           
        <Container fluid className="bg-gray-50">
            <Row>
                {/* toggle sidebar based on the screen size */}
                {isSmallScreen && (
                    <div className="absolute z-[50] w-fit">
                    <div className="w-full flex items-center justify-start bg-indigo-50 p-2">
                        
                        <button className="flex  items-center text-white bg-indigo-600 hover:bg-indigo-700 p-2 hover:py-4 hover:transition-all rounded" onClick={toggleSidebar}>
                            {!showSidebar ? 
                                (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                                </svg>
                                )
                                :
                                (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                                ) 
                            }
                        </button>
                    </div>
                    </div>
                )}
                <div  md={3} className={`overflow-y-auto absolute w-full md:w-[30%] top-[10%] pt-[50px] h-full border border-gray-800 bg-white shadow-sm ${isSmallScreen && !showSidebar ? 'hidden' : 'block z-20'}`} >
                    <AdminSidebar setShowSidebar={setShowSidebar}/>
                </div>

                <Col xs={12} md={9} className="w-full md:mt-[70px]">
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminSpaceLayout;