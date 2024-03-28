import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import layers from '../../assets/Images/layers.png'
import { useDataContext } from "../../utils/useContext";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Login = () => {
  //  const params = useSearchParams();
  // const red = params.get('red');
  // console.log(red)
const {setLogin,auth} =useDataContext();
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
   

    
 const body = { email: email, password: password };
    setLoading(true);
  fetch(apiUrl+"/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Set the content type to JSON
  },
  body: JSON.stringify(body), // Convert the body object to JSON
})
      .then((response) => {

        if (!response.ok) {
          setError(`HTTP error! status:`);
          setLoading(false)
          
          

        }
        return response.json();
      })
      .then((data) => {
        if (!data.success) {
          setError(data.message);
          setLoading(false);

        } else {
          setError('');
          setLoading(false);
          setMsg("You logged in successfully!");
          // const loginData = { userId: data.id, userName: data.userName, email: data.email, userImg: data.userImg, token: data.token, isAdmin: data.isAdmin };
          setLogin(data.id, data.userName, data.email, data.userImg, data.token, data.isAdmin,data.active)
          console.log("start in lpgin infos",data)
          setTimeout(() => {
            navigate('/user/myspace');
          }, 2000);

        }
      });

    e.preventDefault();
  };






    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={layers}
            alt="ComputeSphere Society"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {/* <p>userName:{auth.userName}</p>
        <img src={apiUrl+"/"+auth.userImg} alt="" width={50}/> */}
 <p className="text-red-500 font-bold text-xl text-center w-full">
            {err}
        </p>
          <p className="text-green-500 font-bold text-xl text-center w-full">
            {msg}
          </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitHandler}
            className="space-y-6" >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                   onChange={(event) => {
                setEmail(event.target.value);
                  }}
                 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(event) => {
                setPassword(event.target.value);
                  }}
                 
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
               {loading? 'Login in...':'Sign in'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member yet?{' '}
            <a href="/get-started/profile-setup" className="font-semibold leading-6 text-blue-600 hover:text-indigo-500">
              Sign up and set a profile
            </a>
          </p>
          <p className="mt-1 text-center text-sm text-gray-500">
            Go back &nbsp;
            <a href="/" className="text-gray-700 leading-6  font-bold underline">
              Home
            </a>
          </p>
        </div>
      </div>
    )
}

export default Login;