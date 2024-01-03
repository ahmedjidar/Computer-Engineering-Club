import React, { useEffect, useState } from "react";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import pfp from '../../../assets/Images/pfp.png'
import { useSelector } from "react-redux";
import getUser from "/src/utils/getUser.js"
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Portfolio = () => {
  // states for editing
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   getUser(auth.userId).then(res => {
  //     setUser(res);
  //     console.log("user:", user);
  //   })
 
  // },[])
    // const [userProfileData, setUserProfileData] = useState();
const auth =useSelector(state=>state.auth)
    return (
            <div className="bg-white p-4">
                <div className="flex justify-between items-center">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">User Information</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                    </div>
                    <div>
                        <img src={apiUrl+"/"+auth.userImg} alt="user" className="w-16 h-16 object-cover rounded-full mr-4 shadow-sm"/>
                    </div>
                </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">UserName</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{auth.userName}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Studies at</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ENSAO</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{auth.email}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Identifier</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">H131183620</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                      qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                      pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                              <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Download
                            </a>
                          </div>
                        </li>
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                              <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Download
                            </a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
    )
}

export default Portfolio;