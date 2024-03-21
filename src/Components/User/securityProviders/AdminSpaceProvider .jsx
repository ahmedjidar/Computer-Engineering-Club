import React, { useEffect, useState } from 'react'
import PageLoader from '../../Common/Loaders/pageLoader';
import { useDataContext } from '../../../utils/useContext';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

function AdminSpaceProvider({children}) {
  const { logout,  } = useDataContext();
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoading(true)
  //   const getStatus = async () => {
  //     const state = await getauth();
  //     if (state==false) {
  //       console.log('res', state)
       
  //       // navigate('/login?red=/admin')    
  //     }
  // }
    // getStatus().then(res => {
    //   console.log(res)
    //   setLoading(false);
    // }).catch(err=>console.log(err))
   

    const token = localStorage.getItem('token');
    fetch(apiUrl + '/supauth', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    })
      .then(response => {
        if (!response.ok) {
          window.scrollTo(0, 0);
          setError("try again");
          setLoading(false);
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data.success === false) {
          window.scrollTo(0, 0);
          setError(data.message);
          console.log('in sucsses false:', data.message)
          setAuth(false)
          setLoading(false);
           setTimeout(() => {
            //  logout();
            //  navigate('/login?red=/admin')
            }, 5000);
       
        } else if (data.success === true) {
          console.log('in sucsses true')
          window.scrollTo(0, 0);
          setAuth(true)
          setLoading(false);
        }
      })
      .catch(error => {
        console.log('in sicsses catch')
        setError("fetch problem");
        setLoading(false);

      });
  }, []);


    if (loading) {
      return <PageLoader msg="check Admin Access" />;
    } else if (!auth) {
      return <div className="w-full h-full mt-[100px]  ">
        <p className="text-red-500 font-bold text-xl text-center w-full">
          {err}
        </p>
        <PageLoader msg="check Admin Access" />;
      </div>
    } else {
      return children;
    }
}

export default AdminSpaceProvider