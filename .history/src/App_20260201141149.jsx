import React from "react";
import "./pages/inde"

import Homepage from "./Homepage.jsx";
import { Routes, Route } from "react-router-dom";
import StudentRegistration from "./Components/StudentRegistration";
import TeacherRegistration from "./Components/TeacherRegistration";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/student-registration"element={<StudentRegistration />}/>
      <Route path="/teacher-registration" element={<TeacherRegistration />} />
    </Routes>
  );
};

export default App;
