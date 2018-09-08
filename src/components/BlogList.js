import React from 'react';
import Blog from './Blog';


export default ({ blogs, name }) => (
  <div>
    <h2>blogs</h2>
    <p>
      {`${name} logged in`}
    </p>
    {
      blogs.map(blog => (
        <Blog key={blog._id} blog={blog} />
      ))
    }
  </div>
);
