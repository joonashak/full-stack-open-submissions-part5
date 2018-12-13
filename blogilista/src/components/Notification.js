import React from 'react';


const styles = {
  error: {
    color: 'red',
    border: '2px solid red',
  },
  info: {
    color: 'green',
    border: '2px solid green',
  },
};


export default ({ type, message }) => (
  <div>
    {
      message
        ? (
          <div style={styles[type]}>
            {message}
          </div>
        )
        : null
    }
  </div>
);
