import React from 'react';

const StatusCat = ({ statusCode = 404 }) => {
  return <img src={`https://http.cat/${statusCode}`} alt={`${statusCode} meow`} />;
}

export default StatusCat;
