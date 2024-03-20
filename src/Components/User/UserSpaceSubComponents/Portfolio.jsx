import React, { useEffect, useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import pfp from "../../../assets/Images/pfp.png";
import { useDataContext } from "../../../utils/useContext";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Portfolio = () => {
  const { getUser } = useDataContext();
  const { auth } = useDataContext();
  const [loading, setLoading] = useState(true);
  const userId = window.localStorage.getItem('userId');

  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const fetchedUser = await getUser(userId);
      setUser(fetchedUser);
      setIsEditing(Object.keys(fetchedUser).reduce((acc, key) => ({...acc, [key]: false}), {}));
      setLoading(false);
    };
    if (userId) {
      fetchUser();
    }
  }, [userId, getUser]);

  const handleEditClick = (field) => {
    setIsEditing({...isEditing, [field]: true});
  };

  const handleSaveClick = () => {
    setIsEditing(Object.keys(user).reduce((acc, key) => ({...acc, [key]: false}), {}));
    // Here you can handle the updated data, for example, send them to the server.
  };

  return (
    <div className="bg-white p-4">
      {!loading ? (
        <>
          <div className="flex justify-between items-center">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                User Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal details and application.
              </p>
              {
                Object.values(isEditing).some(value => value) 
                  && 
                <div className="mt-2 flex justify-between items-center gap-1 p-4 bg-indigo-50 rounded">
                  <p className="text-pretty text-xs text-gray-500 font-medium rounded p-2">You are currently in Editing Mode</p>
                  <button 
                    onClick={handleSaveClick} 
                    className="p-2 text-white text-xs font-medium bg-indigo-600 hover:bg-indigo-700 rounded shadow-md">
                      Save Changes
                  </button>
                </div>
              }
            </div>
            <div className="flex items-center gap-4">
              <p className="font-bold">{user && user.name +" "+user.familyName}</p>
              <img
                src={apiUrl + "/" + user.image}
                alt="user"
                className="w-16 h-16 object-cover rounded-full mr-4 shadow-sm"
              />
            </div>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">

                <div key="name" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Firstname
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user["name"]} 
                      onChange={(e) => setUser({...user, ["name"]: e.target.value})} 
                      disabled={!isEditing["name"]} 
                      className={`rounded border-none ${isEditing["name"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("name")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="familyName" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Lastname
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user["familyName"]} 
                      onChange={(e) => setUser({...user, ["familyName"]: e.target.value})} 
                      disabled={!isEditing["familyName"]} 
                      className={`rounded border-none ${isEditing["familyName"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("familyName")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="email" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user["email"]} 
                      onChange={(e) => setUser({...user, ["email"]: e.target.value})} 
                      disabled={!isEditing["email"]} 
                      className={`rounded border-none ${isEditing["email"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("email")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="promo" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Promo
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user["promo"]} 
                      onChange={(e) => setUser({...user, ["promo"]: e.target.value})} 
                      disabled={!isEditing["promo"]} 
                      className={`rounded border-none ${isEditing["promo"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("promo")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="status" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Status
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user["status"]} 
                      onChange={(e) => setUser({...user, ["status"]: e.target.value})} 
                      disabled={!isEditing["status"]} 
                      className={`rounded border-none ${isEditing["status"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("status")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="about" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    About
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user["about"]} 
                      onChange={(e) => setUser({...user, ["about"]: e.target.value})} 
                      disabled={!isEditing["about"]} 
                      className={`rounded border-none ${isEditing["about"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("about")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="city" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    City
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user["city"]} 
                      onChange={(e) => setUser({...user, ["city"]: e.target.value})} 
                      disabled={!isEditing["city"]} 
                      className={`rounded border-none ${isEditing["city"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("city")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="contact.linkedin" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    LinkedIn
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user.contact?.linkedin} 
                      onChange={(e) => {
                        let updatedUser = {...user};
                        if (!updatedUser.contact) {
                          updatedUser.contact = {};
                        }
                        updatedUser.contact.linkedin = e.target.value;
                        setUser(updatedUser);
                      }} 
                      disabled={!isEditing["contact.linkedin"]} 
                      className={`rounded border-none ${isEditing["contact.linkedin"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("contact.linkedin")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

                <div key="contact.phone" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Phone
                  </dt>
                  <dd className="flex items-center justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input 
                      value={user.contact?.phone} 
                      onChange={(e) => {
                        let updatedUser = {...user};
                        if (!updatedUser.contact) {
                          updatedUser.contact = {};
                        }
                        updatedUser.contact.phone = e.target.value;
                        setUser(updatedUser);
                      }} 
                      disabled={!isEditing["contact.phone"]} 
                      className={`rounded border-none ${isEditing["contact.phone"] ? "ring-2 ring-purple-400 focus:ring-2 focus:ring-purple-400" : "ring-1 ring-gray-400"}`}
                    />
                    <button 
                      onClick={() => handleEditClick("contact.phone")} 
                      className="rounded font-medium p-2 ring-1 ring-gray-400 hover:bg-gray-50">
                        Edit
                    </button>
                  </dd>
                </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  UserName
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user.username}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user.about}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Studies at
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ENSAO
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  LinkedIn
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                 <a className="underline text-blue-500" href={user.contact&&user.contact.linkedin}>{user.contact&&user.contact.linkedin};</a>
                </dd>
              </div>
              
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Attachments
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            resume_back_end_developer.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            2.4mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            coverletter_back_end_developer.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            4.5mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Portfolio;