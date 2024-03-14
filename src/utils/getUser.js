const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
 
const getUser = async (id) => {
        try {
          const response = await fetch(apiUrl+"/user/"+id);

          if (!response.ok) {
            console.log("err ok");
          } else {
            const data = await response.json();
            if (data) {
              console.log("success");
              console.log("userdata",data)
              return data;
            } else {
              console.log("added");
            }
          }
        } catch (err) {
          console.log(err)
        }
}
export default  getUser;