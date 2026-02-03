import React from "react";

import Homepage from "./Homepage.jsx";
import { Routes, Route } from "react-router-dom";
import StudentRegistration from "./Components";
import TeacherRegistration from "./TeacherRegistration.jsx";



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
