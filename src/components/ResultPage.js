import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const ResultPage = () => {
  const location = useLocation(); // Create a location object from useLocation
  const rating = new URLSearchParams(location.search).get('rating'); // Extract the rating from the query parameter

  return (
    <div>
      <h1>Result Page</h1>
      <p>Video Rating: {rating}</p>
    </div>
  );
};

export default ResultPage;
