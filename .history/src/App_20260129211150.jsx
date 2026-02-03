import React from "react";

import Homepage from "./Homepage.jsx";
import { Routes, Route } from "react-router-dom";

import TeacherRegistration from "./TeacherRegistration.jsx";


import { useNavigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/student-registration"
        element={<StudentRegistration />}
     
      />
      <Route path="/teacher-registration" element={<TeacherRegistration />} />
    </Routes>
  );
};

export default App;
