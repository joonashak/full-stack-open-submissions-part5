import React from 'react';


export default ({ blog }) => (
  <div>
    {
      `${blog.title} ${blog.author}`
    }
  </div>
);
