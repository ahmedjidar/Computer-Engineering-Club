/* eslint-disable no-dupe-keys */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import { useDataContext } from "../../../utils/useContext";
import { formatDate } from "../../../utils/timeFormater";
import { ImageSwiper } from "./BlogPostElements/imgeSlider";
import UserModal from "./userModal";
import PageLoader from "../../Common/Loaders/pageLoader";
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

function confirmDelete(text) {
    // Prompt the user for confirmation and store the result
    const userInput = prompt("To confirm deletion, please enter '"+ text+"'");

    // Check if the user input matches the expected string
    if (userInput === text) {
        // If the input matches, return true
        return true;
    } else {
        // If the input does not match, show an alert and return false
        alert("Incorrect input. Please try again.");
        return false;
    }
}

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

function AdminCheckUsers() {
  const columns = [
    {
      name: "Full Name",
      selector: (row) => row.name +" "+row.familyName,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      maxWidth: "250px",
    },
    {
      name: "Promo",
      selector: (row) => row.promo && row.promo,
      sortable: true,
      maxWidth: "120px",
      // cell: (row) => (
      //   <span title={row.content} style={{ lineHeight: "1.1" }}>{row.content}</span>
      // ),
    },
    {
      name: "join Date",
      selector: (row) => formatDate(row.createdAt),
      sortable: true,
      maxWidth: "120px",

    },
    {
      name: "Status",
      selector: (row) => row.status && row.status,
      sortable: true,
      maxWidth: "200px",
    },
    {
      name: "linkedIn",
      selector: (row) => <a className="underline text-blue-600" href="www.google.com">{ row.contact.linkedin}</a>,
      sortable: true,
      maxWidth: "200px",
    },
     {
      name: "Role",
      selector: (row) => row.admin?'Admin':'member',
      sortable: true,
      maxWidth: "100px",
    },
    {
      name: "Active",
      selector: (row) => (row.active ? "✅" : "❌"),
      // sortable: true,
      maxWidth: "100px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className=" flex  justify-start gap-2">
          <button
            onClick={() => handleRowDetails(row)}
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            className="btn btn-warning h-[45px] w-[45px] flex justify-center items-center"
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>

          <button
            onClick={() => handleRowRefuse(row)}
            className="btn btn-dark h-[45px] w-[45px] flex justify-center items-center"
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
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </button>

          <button
            onClick={() => handleRowAccept(row)}
            className="btn btn-success text-center h-[45px] w-[45px] flex justify-center items-center"
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
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>

          <button
            onClick={() => handleRowDelete(row)}
            className="btn btn-danger h-[45px] w-[45px] flex justify-center items-center"
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];
  const { getUsers, acceptUser, refuseUser, deleteUser } = useDataContext();
 const [usersData, setUsersData] = useState([]);
 const [displayedData, setDisplayedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Add state for selected row
  const handleRowDetails = (row) => {
    setSelectedRow(row);
  };
  const handleRowAccept = async(row) => {

    console.log(row._id, row);
    const accepting = async () => {
      const p = await acceptUser(row._id);
      // console.log("posts in getposts then", p);
      // setPostData(p);
    };
    accepting()
      .then(() => console.log("xi haja"))
      .catch(() => { });
    setTimeout(() => {
      syncPosts();
      }, 200);
      setTimeout(() => {
      syncPosts();
      }, 500);
       setTimeout(() => {
      syncPosts();
       }, 1000);
     setTimeout(() => {
      syncPosts();
    }, 2000);

   
  };
  const handleRowRefuse = (row) => {

    const refusing = async () => {
      const p = await refuseUser(row._id);
      // console.log("posts in getposts then", p);
      // setPostData(p);
    };
    refusing()
      .then(() => console.log("xi haja"))
      .catch(() => {});
    setTimeout(() => {
      syncPosts();
      }, 200);
      setTimeout(() => {
      syncPosts();
      }, 500);
       setTimeout(() => {
      syncPosts();
       }, 1000);
     setTimeout(() => {
      syncPosts();
    }, 2000);
  };
  const handleRowDelete = (row) => {

    const deleting = async () => {
      const p = await deleteUser(row._id);
      // console.log("posts in getposts then", p);
      // setPostData(p);
    };
    if (confirmDelete('I am sure i want to delete ' + row.name)) {
      deleting()
      .then(() => console.log("xi haja"))
      .catch(() => {});
      setTimeout(() => {
      syncPosts();
      }, 200);
      setTimeout(() => {
      syncPosts();
      }, 500);
       setTimeout(() => {
      syncPosts();
       }, 1000);
     setTimeout(() => {
      syncPosts();
    }, 2000);
    }
    
  };
  //  console.log("start in feed section");

 
  useEffect(() => {
  console.log('======================>',loading)
  }, [loading]);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const p = await getUsers();
     p.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setUsersData(p);
      setDisplayedData(p);

    };
    fetchPost()
      .then(() => setLoading(false))
      .catch(() => {});
    console.log("posts in feed section", usersData);
  }, []);
  const syncPosts = async () => {
    const fetchPost = async () => {
      const p = await getUsers();
      // Sort the fetched posts by createdAt field in descending order
     p.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setUsersData(p);
      setDisplayedData(p);
    };
    fetchPost()
      .then(() => console.log('done'))
      .catch(() => {});
    console.log("posts in feed section", usersData);
  };
  const handleFilter = (e) => {
    const newData = usersData.filter((row) => {
      return row.email.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(newData);
    setDisplayedData(newData);
  };

  const tableHeaderstyle = {
  headCells: {
    style: {
      fontWeight: "bold",
      fontSize: "15px",
      backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray color with 50% opacity
      textAlign: "center",
      verticalAlign: "middle",
      margin: '0px',
      width:'full',
      padding:'0px'
    },
  },
};

  return (
    <>
      <div className=" mt-5">
        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  ">
          Check Pending Users
        </h1>
        
       {!loading ? ( <div>  <DataTable
          customStyles={tableHeaderstyle}
          columns={columns}
          data={displayedData}
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
            <input
              type="text"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Search..."
              onChange={handleFilter}
            />
          }
          subHeaderAlign="left"
        />
      
          <div className="modal  lg:[800rem]" tabIndex="-1" id="myModal">
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
                <div className="modal-body min-h-[500px] ">
                  {selectedRow && (
                    <>
                      <UserModal id={selectedRow._id} />
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
        
          </div>) : (
          <PageLoader/>
          )}
      </div>
    </>
  );
}

export default AdminCheckUsers;
