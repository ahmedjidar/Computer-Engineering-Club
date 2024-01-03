import { useState } from "react";

export function Commentadd({ addComment }) {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    addComment({
      id: 2,
      user: {
        img: "https://media.licdn.com/dms/image/D4E03AQFT6HaFfbN-RQ/profile-displayphoto-shrink_800_800/0/1694863697491?e=2147483647&v=beta&t=NSzTOnOxtcmPZrxwIZx7ocR-1hKNtWORrGKHZlsD8K0",
        name: "Lmehboula oficiel ",
      },
      comment: {
        text: text,
        date: "Nov.29,2010",
        likes: 20,
      },
    });
    setText("");
    setImg("");
    console.log("formData:", text, img);
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="p-3 relative w-full flex items-center justify-start gap-3   rounded"
      >
        <img
          className="w-12 h-12 rounded-full"
          src="https://media.licdn.com/dms/image/D4E03AQFT6HaFfbN-RQ/profile-displayphoto-shrink_800_800/0/1694863697491?e=2147483647&v=beta&t=NSzTOnOxtcmPZrxwIZx7ocR-1hKNtWORrGKHZlsD8K0"
        />
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          className="this no w-full bg-gray-100 rounded-full px-3 py-2 border"
          placeholder="Wacha a said? 3andek madif..."
        />
        <div className="group">
          <input
            value={img}
            onChange={(event) => {
              setImg(event.target.value);
            }}
            id="fileInput"
            type="file"
            className="no this opacity-0 right-[90px] w-[15px] absolute cursor-pointer"
          />
          <i className="fa-solid fa-paperclip text-lg cursor-pointer group-hover:text-orange-500 transition"></i>
        </div>
        <button className="m-0 p-0 max-w-fit">
          <i className="fa-regular fa-paper-plane text-lg cursor-pointer px-2 hover:text-blue-500 transition"></i>
        </button>
      </form>
    </>
  );
}