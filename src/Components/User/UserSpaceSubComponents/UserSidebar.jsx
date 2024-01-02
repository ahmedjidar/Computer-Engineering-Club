import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, FormControl } from 'react-bootstrap';

const UserSidebar = ({ onSearch, setShowSidebar }) => {


    // search handling
    const handleSearch = (event) => {
        // search listener
        const searchText = event.target.value;
        onSearch(searchText);
    }

    return(
    <>
        {/* sidebar */}
        <Navbar collapseOnSelect expand="lg" className={``}>
            <Nav defaultActiveKey="/"  className="flex-column w-full h-screen py-2 px-2">
                {/* searchBox */}
                <Form inline className=" mb-10 mt-4 flex rounded ring-1 ring-gray-300 focus-within:ring-blue-600 focus-within:ring-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="border-none w-10 h-10 flex select-none items-center pl-3 text-gray-400 sm:text-sm">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="text-sm placeholder:text-gray-400 border-0 focus:outline-none focus:border-transparent focus:ring-0 rounded"
                        onChange={handleSearch}
                    />
                </Form>

                <Link to="/user/myspace/" onClick={() => setShowSidebar(false)} className="flex items-center p-2 gap-3 text-gray-600 font-medium rounded focus:text-blue-600 focus:bg-blue-50 hover:bg-blue-50 hover:text-blue-700 hover:rounded active:bg-blue-100 active:rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p className="text-sm">Home</p>
                </Link>

                <Link to="#" className="mt-2 flex items-center justify-between p-2">
                    <div className="gap-3 flex items-center text-gray-600 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                        <p className="text-sm">Feed</p>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="text-sm border-none bg-blue-50 text-gray-600 hover:bg-blue-100 hover:text-blue-600 active:bg-blue-100 active:text-blue-600 focus:text-blue-600 focus:bg-blue-50">
                            From
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="absolute text-sm mt-2 border-none ring-2 ring-blue-600">
                            <Dropdown.Item>
                                <Link to="/user/myspace/myblogs" onClick={() => setShowSidebar(false)}>My Blogs</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/user/myspace/globalfeed" onClick={() => setShowSidebar(false)}>Community Feed</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Link>

                <Link to="/user/myspace/calendar" onClick={() => setShowSidebar(false)} className="mt-2 flex items-center p-2 gap-3 text-gray-600 font-medium focus:text-blue-600 focus:bg-blue-50 hover:bg-blue-50 hover:text-blue-700 hover:rounded active:bg-blue-100 active:rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <p className="text-sm">Calendar</p>
                </Link>

                <p className="mt-4 text-[.9rem] text-gray-400 font-medium text-xs">Performance Focus</p>
                <Link to="/user/myspace/portfolio" onClick={() => setShowSidebar(false)} className="mt-2 flex items-center p-2 gap-3 text-gray-600 font-medium rounded focus:text-blue-600 focus:bg-blue-50 hover:bg-blue-50 hover:text-blue-700 hover:rounded active:bg-blue-100 active:rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className="text-sm">Portfolio</p>
                </Link>

                <Link to="/user/myspace/myprogress" onClick={() => setShowSidebar(false)} className="mt-2 flex items-center p-2 gap-3 text-gray-600 font-medium focus:text-blue-600 focus:bg-blue-50 hover:bg-blue-50 hover:text-blue-700 hover:rounded active:bg-blue-100 active:rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    <p className="text-sm">My Progress</p>
                </Link>

                <p className="mt-4 text-[.9rem] text-gray-400 font-medium text-xs">Assistance</p>
                <Link to="/user/myspace/feedback" onClick={() => setShowSidebar(false)} className="mt-2 flex items-center p-2 gap-3 text-white font-medium rounded bg-blue-900 hover:bg-blue-800 hover:roundedactive:rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <p className="text-sm">Feedback/Contact Us</p>
                </Link>

                <Link to="/user/myspace/feedback" onClick={() => setShowSidebar(false)} className="mt-2 flex items-center p-2 gap-3 text-gray-600 font-medium focus:text-blue-600 focus:bg-blue-50 hover:bg-blue-50 hover:text-blue-700 hover:rounded active:bg-blue-100 active:rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                    </svg>
                    <p className="text-sm">Support</p>
                </Link>

                <Link to="/user/myspace/settings" onClick={() => setShowSidebar(false)} className="mt-2 flex items-center p-2 gap-3 text-gray-600 font-medium focus:text-blue-600 focus:bg-blue-50 hover:bg-blue-50 hover:text-blue-700 hover:rounded active:bg-blue-100 active:rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm">Settings</p>
                </Link>
            </Nav>
        </Navbar>
    </>
    )
}

export default UserSidebar;