import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  return <h2>Details for Course: {id}</h2>;
};

export default CourseDetails;
