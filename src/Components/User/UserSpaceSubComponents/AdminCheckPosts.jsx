/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import { useDataContext } from "../../../utils/useContext";
import { formatDate } from "../../../utils/timeFormater";
import { ImageSwiper } from "./BlogPostElements/imgeSlider";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }
  return results;
}


// const data = [

//     {
//         id: 1,
//         title: "mouad",
//         Description: "2222",
//         created_at: "xyrtudazadzadzadzzadzadzadz",
//         posterImages: "zdaadzadzazadzadz",
//         status: "Pending"

//       },
//       {
//         id: 2,
//         title: "hamza",
//         Description: "2222",
//         created_at: "xyrtuyuhnj,ma",
//         posterImages: "zdaadzadzazadzadz",
//         status: "Pending"

//       },
//       {
//         id: 3,
//         title: "khalil",
//         Description: "2222",
//         created_at: "xyrtuyuadzadzadza",
//         posterImages: "zdaadzadzazadzadz",
//         status: "Pending"

//       },
//       {
//         id: 4,
//         title: "ahmed",
//         Description: "2222",
//         created_at: "xyrtuyuhadzadzadza",
//         posterImages: "zdaadzadzazadzadz",
//         status: "Pending"
//       },
      
      
      
//     ]






const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));

// -----------------------------------



function AdminCheckPosts() {

  const columns = [
   {
      name: "owner",
      selector: (row) => row.postowner&&row.postowner.username,
      sortable: true,
      maxWidth: "150px",

    },
    {
      name: "title",
      selector: (row) => row.title&&row.title,
      sortable: true,
      maxWidth: "300px",

    },
    {
      name: "content",
      selector: (row) => row.content&&row.content,
      sortable: true,
      maxWidth: "700px",
      // cell: (row) => (
      //   <span title={row.content} style={{ lineHeight: "1.1" }}>{row.content}</span>
      // ),
      
    },
    {
      name: "createdAt",
      selector: (row) => formatDate(row.createdAt) ,
      sortable: true,
      maxWidth: "130px",
    },
    {
      name: "likes",
      selector: (row) => row.likes&&row.likes.length,
      sortable: true,
      maxWidth: "100px",
    },
     {
      name: "status",
      selector: (row) => row.active?'✅':'❌',
      sortable: true,
      maxWidth: "100px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="openbtn text-center d-flex">

          <button onClick={() => handleRowDetails(row)} data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-warning" style={{ width: '45px' , margin: '4px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>


          <button onClick={() => handleRowAccept(row)}className="btn btn-danger" style={{ width: '45px', margin: '4px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
    
          <button onClick={() => handleRowRefuse(row)}className="btn btn-success" style={{ width: '45px', margin: '4px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </button>
  
        </div>
  
      )
    },
  ];

  const [selectedRow, setSelectedRow] = useState(null); // Add state for selected row
  const handleRowDetails = (row) => {
    setSelectedRow(row);
    
  };
const handleRowAccept = (row) => {
    
    
  };
const handleRowRefuse = (row) => {
    
    
  };
  const {getPosts} =useDataContext();
     console.log("start in feed section");
    
    const [postsData,setPostData]=useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const p = await getPosts();
            console.log("posts in getposts then", p);
            setPostData(p);
        
        }
        fetchPost()
      .then(() => setLoading(false))
      .catch(() => {
      });
        console.log("posts in feed section", postsData)
        
        
    },[])
    const syncPosts = async () => {
        console.log("in sync post feed section out",Math.random());
        setLoading(true)
        getPosts().then(postts => {
            console.log("in sync post feed section in", Math.random());
            setPostData(postts)
            console.log("new posts:", postsData);
              setLoading(false)
        }).catch(err => {
            console.log(err)
        })
              setLoading(false)
       
    }
  const handleFilter = (e) => { 
    setLoading(true);
        const newData = postsData.filter(row => {
            return row.title.toLowerCase().includes(e.target.value.toLowerCase())
        }) 
        console.log(newData);
    setPostData(newData);
    setLoading(false);
    
    }
 

    const tableHeaderstyle={
        headCells:{
            style:{
                fontWeight:"bold",
                fontSize:"15px",
                backgroundColor:"rgb(38, 154, 38)",
                textAlign: "center",  // Center text horizontally
                verticalAlign: "middle",  // Center text vertically
    
            },
        },
    }

  return (
    <>
  <div className="container mt-5">
        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Check Pending Posts</h1>
        <DataTable
          customStyles={ tableHeaderstyle}
          columns={columns}
          data={postsData}
          defaultSortFieldID={1}
          pagination
          fixedHeader
          selectableRowsHighlight
          highlightOnHover
          // paginationComponent={BootyPagination}
          selectableRows
          selectableRowsComponent={BootyCheckbox}

        // Actions 

        actions={
            <>
                <button className="btn btn-success">Accept All</button>
                <button className="btn btn-danger">Reject All</button>
            </>
        }
          
        // Searching 

        subHeader
        subHeaderComponent={
           <input type="text"
           className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
           placeholder="Search..."
           onChange={handleFilter}
           />
        }
        subHeaderAlign="left"


        />
        {!loading?  <div className="modal" tabIndex="-1" id="myModal">
        {/* Modify the modal content based on the selected row */}
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
             
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                {selectedRow && (
                  <>
                    <div className="gap-2 mb-[rem] p-4 h-fit ">
                      <div className="w-full bg-white ring-1 ring-gray-300 rounded">
                        <div className="flex gap-2 items-center justify-start p-4">
                          <img
                            className="w-12 h-12 rounded-full object-cover"
                            src={apiUrl + "/" + selectedRow.postowner.image}
                          />
                          <div>
                            <p className="block font-medium text-base leading-snug text-gray-900 ">
                              {selectedRow.postowner.name + " " + selectedRow.postowner.familyName}
                            </p>
                            <p className="block text-sm text-gray-500 font-light">
                              {formatDate(selectedRow.createdAt)}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-800 font-bold  leading-snug md:leading-normal px-3">
                          |{selectedRow.title}|
                        </p>
                        <p className="text-gray-700 leading-snug md:leading-normal p-3">
                          {selectedRow.content}
                        </p>
                        {selectedRow.images&&selectedRow.images.length > 0 && <ImageSwiper images={selectedRow.images&&selectedRow.images} />}
                        <div>
                          <div className="px-2 flex justify-between items-center text-sm text-gray-400 mt-5 py-2">
                            <div>{selectedRow.likes.length} likes</div>
                            <div className="ml-1  font-light">
                              {selectedRow.comments&&selectedRow.comments.length} commentaires
                            </div>
                          </div>
                          <hr className="" />
                          <div className="flex  items-center ">
                            <div
                              className={`w-1/2 p-2 text-center border-r-2 cursor-pointer  flex items-center justify-center 
            }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="01.5"
                                stroke="currentColor"
                                className="w-6 h-6 p-0 m-0"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>
                              Like
                            </div>
                            <div
                              className="w-1/2 p-2 text-center cursor-pointer  flex items-center justify-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                />
                              </svg>
                              Comment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>)}

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                data-bs-dismiss="modal"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      </div>:<p>loading</p>}
    </div>
    </>
  );
}

export default AdminCheckPosts;