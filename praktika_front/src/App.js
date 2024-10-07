import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

import Introduction from './pages/Introduction'
import InputOutput from './pages/InputOutput'
import VariablesAndDataTypes from './pages/VariablesAndDataTypes'
import OperatorsAndExpressions from './pages/OperatorsAndExpressions'
import ConditionalExpressions from './pages/ConditionalExpressions'
import Cycles from './pages/Cycles'
import Functions from './pages/Functions'
import Strings from './pages/Strings'
import ListsAndTuples from './pages/ListsAndTuples'
import DictsAndSets from './pages/DictsAndSets'
import Libraries from './pages/Libraries'
import ClassesAndObjects from './pages/ClassesAndObjects'
import AdvancedOOP from './pages/AdvancedOOP'
import Books from './pages/Books'
import PythonLinks from './pages/PythonLinks'
import Registration from './pages/Registration'

import LessonsList from './LessonsList'
import LessonPage from './components/LessonPage';
import AddLesson from './components/AddLesson';


const App = () => {
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedInUsername(username);
  };

  const handleLogout = () => {
    setLoggedInUsername('')
    localStorage.setItem('loggedInUser', '');
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setLoggedInUsername(loggedInUser);
    }
  }, []);

  return (
    <Router>
      <Navigation loggedInUsername={loggedInUsername} handleOut={handleLogout} />
      
      <Routes>

        <Route path="/" element={<Introduction />} />
        <Route path="/register" element ={<Registration onLogin={handleLogin} />}/>

        <Route path="/python-basics/input-output" element={<InputOutput />} />
        <Route path="/python-basics/variables-and-data-types" element={<VariablesAndDataTypes />} />
        <Route path="/python-basics/operators-and-expressions" element={<OperatorsAndExpressions />} />

        <Route path="/conditional-and-cycles/conditional-expressions" element={<ConditionalExpressions />} />
        <Route path="/conditional-and-cycles/cycles" element={<Cycles />} />

        <Route path="/functions" element={<Functions />} />

        <Route path="/dataTypes/strings" element={<Strings />} />
        <Route path="/dataTypes/lists-and-tuples" element={<ListsAndTuples />} />
        <Route path="/dataTypes/dicts-and-sets" element={<DictsAndSets />} />

        <Route path="/libraries" element={<Libraries />} />

        <Route path="/oop/classes-and-objects" element={<ClassesAndObjects />} />
        <Route path="/oop/advanced-OOP" element={<AdvancedOOP />} />

        <Route path="/extra/literature" element={<Books />} />
        <Route path="/extra/links" element={<PythonLinks />} />

        <Route path="/lessons" element={<LessonsList />} />
        <Route path="/lessons/:id" element={<LessonPage />} />
        {loggedInUsername ==='root' ? 
        <Route path="/add-lesson" element={<AddLesson />} /> : <></>}

      </Routes>
    </Router>

  );
};

export default App;