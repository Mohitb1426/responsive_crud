import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import StudentForm from './components/StudentForm/StudentForm';

function RoutesFile() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="studentForm" element={<StudentForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesFile;