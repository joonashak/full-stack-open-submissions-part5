import React from 'react';
import Blog from './Blog';


export default ({ blogs, loggedInUser }) => (
  <div>
    <h2>Blogs</h2>
    {
      blogs.map(blog => (
        <Blog key={blog._id} blog={blog} loggedInUser={loggedInUser} />
      ))
    }
  </div>
);
