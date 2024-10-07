// src/components/LessonsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LessonsList = () => {
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/lessons');
        setLessons(response.data);
      } catch (error) {
        setError('Error loading lessons');
      }
    };

    fetchLessons();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lesson List</h1>
      {lessons.map((lesson) => (
        <div key={lesson._id}>
          <Link to={`/lessons/${lesson._id}`}>{lesson.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default LessonsList;
