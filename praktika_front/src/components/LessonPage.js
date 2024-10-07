// src/components/LessonPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Lesson from './Lesson';

const LessonPage = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/lessons/${id}`);
        setLesson(response.data);
      } catch (error) {
        setError('Error loading lesson');
      }
    };

    fetchLesson();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Lesson lesson={lesson} />
    </div>
  );
};

export default LessonPage;
