import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useDataContext } from '../../../utils/useContext';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const AddBlogPostModal = (props) => {
    const {auth} =useDataContext();

      const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
    e.preventDefault();
    // const token = sessionStorage.getItem('token');
    try {
      const formData = new FormData(e.target);
      setLoading(true);
      const response = await fetch(apiUrl+"/userSpace/post", {
        method: "POST",
        body: formData,

        // headers: {
        //   'Authorization': 'Bearer ' + token,
        // },
      });

      if (!response.ok) {
        // setErr("try again")
        // navigate('/login');
        setLoading(false);
        console.log("err ok");
      } else {
        const data = await response.json();
        if (data.success === true) {
          // setErr(data.message);
          setLoading(false);
          console.log("err success");
         document.getElementById('myForm').reset()

          props.onHide();
        } else if (data.success === false) {
          setLoading(false);
          // navigate('/admin/projects/'+prjctId);
          console.log("added");
        }
      }
    } catch (error) {
      // setErr("fetch problem");
    }
    };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='font-semibold text-blue-600'>
          <p className='font-semibold text-indigo-200 text-3xl blur-xl absolute'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt impedit quis dicta aperiam accusantium quaerat beatae sit voluptates eveniet, inventore unde fuga molestiae dolorum minus voluptas, sint corrupti id facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores facilis sed architecto voluptas modi a ipsum natus molestiae velit. Consequatur quod architecto officia, dolor necessitatibus voluptatem nostrum voluptates eaque minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eius ipsa magni alias suscipit explicabo soluta a illum optio repellendus quam molestias repudiandae, at reprehenderit aspernatur? Modi dolorum temporibus alias!</p>
          Customize your next blog post!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-4'>
        {/* form to fill the blog post */}
        <form id="myForm" onSubmit={submitHandler} encType="multipart/form-data">
          {/* post title */}
                <input type="hidden" name="ownerid" value={auth.userId}/>
          
            <div className="sm:col-span-3 mb-3">
                <label htmlFor="post-title" className="block text-sm font-medium leading-6 text-gray-600">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="post-title"
                    autoComplete="post-title"
                    className="outline-none bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            {/* post description text */}
            <div className="col-span-full">
                <label htmlFor="post-description" className="block text-sm font-medium leading-6 text-gray-600">
                  Describe your post
                </label>
                <div className="mt-2">
                  <textarea
                    id="content"
                    name="content"
                    rows={3}
                    className="resize-none outline-none bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600"></p>
              </div>
              {/* post attachments */}
              <div className="col-span-full">
                <label htmlFor="post-photo" className="flex items-center gap-2 text-sm font-medium leading-6 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clipRule="evenodd" />
                  </svg>
                  <p>Post file attachment</p>
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="post-photo"
                        className="relative cursor-pointer bg-transparent rounded-md bg-white font-semibold text-blue-600 hover:text-indigo-500"
                      >
                        <span className='bg-transparent'>Upload a file</span>
                        <input id="post-photo" name="image" type="file" className="outline-none bg-transparent sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-end'>
                <button disabled={loading} className="flex items-center gap-2 text-sm text-white bg-indigo-500 rounded px-3 py-2 hover:bg-indigo-600 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" />
                        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                    </svg>
                    <p>{loading? 'posting...':'Post Question'}</p>
                </button>
              </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex items-center gap-2">
            <button onClick={props.onHide} className="flex items-center gap-2 text-sm tex-gray-600 bg-gray-100 hover:bg-gray-200 rounded px-3 py-2">
                <p>Cancel Post</p>
            </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBlogPostModal;