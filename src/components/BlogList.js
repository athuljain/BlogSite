import React, { useContext } from "react";
import { BlogContext } from "./Context";
import { useNavigate } from "react-router-dom";
import "./BlogList.css"

const BlogList = () => {
  const data = useContext(BlogContext);
  const navigate = useNavigate();

  const TitleClick = (blog) => {
    navigate(`/blog/${blog.id}`);
  };

  const CreateBlogButton = () => {
    navigate("/");
  };

  return (
    <div className="BlogList">
      <h1>Blogs...</h1>
      <ul className="BlogUl">
        {data.formData.map((blog) => (
          <li className="BlogLi" key={blog.id} onClick={() => TitleClick(blog)}>
            {blog.title}
          </li>
        ))}
      </ul>
      <div>
        <button className="addBlogBtn" onClick={CreateBlogButton} type="submit">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default BlogList;
