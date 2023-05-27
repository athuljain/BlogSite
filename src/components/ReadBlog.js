import React, { useContext } from "react";
import { BlogContext } from "./Context";
import { useParams } from "react-router-dom";
import "./ReadBlog.css"


function ReadBlog(){
    const {id}=useParams();
    const data= useContext(BlogContext)
    const blog=data.formData.find((blog)=> blog.id === parseInt(id))

    if(!blog){
        return <h1>Blog not found!</h1>
    }

    return(
        <div className="BlogsFull">
        <h1>Full Blogs</h1>
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
        </div>
        </div>
    )
}

export default ReadBlog
