import React, { useEffect, useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import pfp from "../../../assets/Images/pfp.png";
import { useDataContext } from "../../../utils/useContext";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const UserModal = ({id}) => {
  const { getUser } = useDataContext();
  const { auth } = useDataContext();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const userId = id;
    console.log('start in portfolio with useiD is ',userId)

  useEffect(() => {
    console.log('start in portfolio with useiD is ',userId)
    const fetchUser = async () => {
      setLoading(true);
      const userr = await getUser(userId);
      setUser(userr);
      setLoading(false);
    console.log('user ',user)

    };
    if (userId) {
    fetchUser();
    }

  }, [id]);

  // const [userProfileData, setUserProfileData] = useState();

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
            </div>
            <div className="flex items-center gap-4">
            <p className="font-bold">{user && user.name +" "+user.familyName}</p>

              <img
                src={user.image}
                alt="user"
                className="w-16 h-16 object-cover rounded-full mr-4 shadow-sm"
              />
            </div>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
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
        <p>loading...</p>
      )}
    </div>
  );
};

export default UserModal;