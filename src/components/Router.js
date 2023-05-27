import React, { useState } from "react";
import CreateBlog from "./CreateBlog";
import BlogList from "./BlogList";
import ReadBlog from "./ReadBlog";
import { Route, Routes } from "react-router-dom";
import { BlogContext } from "./Context";


const Router = () => {
  const [formData, setFormData] = useState([]);
  
  const state = { formData, setFormData };
  
  return (
    <div>
      <BlogContext.Provider value={state}>
        <Routes>
          <Route path="/" element={<CreateBlog />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<ReadBlog />} />
        </Routes>
      </BlogContext.Provider>
    </div>
  );
};

export default Router;
