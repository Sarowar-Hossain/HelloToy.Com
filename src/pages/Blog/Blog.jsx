import React, { useContext } from "react";
import { UserContext } from "../../Context/Context";

const Blog = () => {
  const {setTitle}=useContext(UserContext);
  setTitle("Blog")
  return (
    <div className="space-y-4 my-10">
      <h1>Coming soon</h1>
    </div>
  );
};

export default Blog;
