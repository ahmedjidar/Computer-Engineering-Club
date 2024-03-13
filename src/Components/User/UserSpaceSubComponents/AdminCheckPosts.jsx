import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

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


const data = [

    {
        id: 1,
        title: "mouad",
        Description: "2222",
        created_at: "xyrtudazadzadzadzzadzadzadz",
        posterImages: "zdaadzadzazadzadz",
        status: "Pending"

      },
      {
        id: 2,
        title: "hamza",
        Description: "2222",
        created_at: "xyrtuyuhnj,ma",
        posterImages: "zdaadzadzazadzadz",
        status: "Pending"

      },
      {
        id: 3,
        title: "khalil",
        Description: "2222",
        created_at: "xyrtuyuadzadzadza",
        posterImages: "zdaadzadzazadzadz",
        status: "Pending"

      },
      {
        id: 4,
        title: "ahmed",
        Description: "2222",
        created_at: "xyrtuyuhadzadzadza",
        posterImages: "zdaadzadzazadzadz",
        status: "Pending"
      },
      
      
      
    ]




// RDT exposes the following internal pagination properties
// const BootyPagination = ({
//   rowsPerPage,
//   rowCount,
//   onChangePage,
//   onChangeRowsPerPage, // available but not used here
//   currentPage
// }) => {
//   const handleBackButtonClick = () => {
//     onChangePage(currentPage - 1);
//   };

//   const handleNextButtonClick = () => {
//     onChangePage(currentPage + 1);
//   };

//   const handlePageNumber = (e) => {
//     onChangePage(Number(e.target.value));
//   };

//   const pages = getNumberOfPages(rowCount, rowsPerPage);
//   const pageItems = toPages(pages);
//   const nextDisabled = currentPage === pageItems.length;
//   const previosDisabled = currentPage === 1;

//   return (
//     <nav>
//       <ul className="pagination">
//         <li className="page-item">
//           <button
//             className="page-link"
//             onClick={handleBackButtonClick}
//             disabled={previosDisabled}
//             aria-disabled={previosDisabled}
//             aria-label="previous page"
//           >
//             Previous
//           </button>
//         </li>
//         {pageItems.map((page) => {
//           const className =
//             page === currentPage ? "page-item active" : "page-item";

//           return (
//             <li key={page} className={className}>
//               <button
//                 className="page-link"
//                 onClick={handlePageNumber}
//                 value={page}
//               >
//                 {page}
//               </button>
//             </li>
//           );
//         })}
//         <li className="page-item">
//           <button
//             className="page-link"
//             onClick={handleNextButtonClick}
//             disabled={nextDisabled}
//             aria-disabled={nextDisabled}
//             aria-label="next page"
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

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
      name: "User",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      sortable: true
    },
    {
      name: "Created_at",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Postimages",
      selector: (row) => row.posterImages,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
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


          <button className="btn btn-danger" style={{ width: '45px', margin: '4px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
    
          <button className="btn btn-success" style={{ width: '45px', margin: '4px' }}>
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
    // Open the modal here if you want it to open immediately when clicking the button
  };

    
    const[records , setRecords] = useState(data);
    const handleFilter = (e) => {
        const newData = data.filter(row => {
            return row.title.toLowerCase().includes(e.target.value.toLowerCase())
        }) 
        console.log(newData);
        setRecords(newData);
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
        <h1 class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Check Pending Posts</h1>
        <DataTable
          customStyles={ tableHeaderstyle}
          columns={columns}
          data={records}
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
        <div className="modal" tabIndex="-1" id="myModal">
        {/* Modify the modal content based on the selected row */}
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Row Details</h5>
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
                  <p>Title: {selectedRow.title}</p>
                  <p>Description: {selectedRow.Description}</p>
                  <p>Created_at: {selectedRow.created_at}</p>
                  {/* Add more details as needed */}
                </>
              )}
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
      </div>
    </div>
    </>
  );
}

export default AdminCheckPosts;