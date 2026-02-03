import { Routes, Route } from "react-router-dom";

import Dashboard from "./client/Teacher/pages/Dashboard";
import CreateLecture from "./client/Teacher/pages/CreateLecture";
import Messages from "./client/Teacher/pages/Messages";

function App() {
  return (
    <Routes>
      <Route path="/teacher/dashboard" element={<Dashboard />} />
      <Route path="/teacher/lecture/create" element={<CreateLecture />} />
      <Route path="/teacher/messages" element={<Messages />} />
    </Routes>
  );
}

export default App;
