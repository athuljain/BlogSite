
import React, { useContext, useRef, useEffect } from "react";
import { BlogContext } from "./Context";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css"

function CreateBlog() {
  const data = useContext(BlogContext);
  const { formData, setFormData } = data;

  const inputRef = useRef(null);
  
  const navigate = useNavigate();

  const Submit = (e) => {
    console.log(data.title);
    console.log(data.content);
    e.preventDefault();

  }
  const ButtonClick=()=>{
    const title = inputRef.current.title.value;
    const content = inputRef.current.content.value;
    const id=Math.floor(Math.random()*1000)

     setFormData([ ...formData,{ title, content, id} ]);
    console.log(formData);
    // console.log(data);
    console.log(title,content,id);
    navigate("/blog");
  };
  useEffect(()=>{
    inputRef.current.title.focus()
  })
  

  return (
    <div className="mainPage">
      <div>
        <h1>Create Your Blogs</h1>
        <form className="BlogFrom" ref={inputRef} onSubmit={Submit}>
          <div>
            <label className="BlogTitle">Blog Title</label>
            <input className="TitileInput" type="text" name="title"  />
          </div>
          <div>
            <label className="BlogContent"> Blog Content </label>
            <input className="ContentInput" type="text" name="content"  />
          </div>
          <div>
            <button className="UploadBlogBtn" onClick={ButtonClick} type="submit" >Upload Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
