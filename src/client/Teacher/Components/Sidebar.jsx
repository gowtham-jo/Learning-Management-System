import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "220px",
        background: "#1e293b",
        color: "#fff",
        padding: "20px"
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>LMS Teacher</h3>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link style={{ color: "#fff" }} to="/teacher/dashboard">Dashboard</Link>
        <Link style={{ color: "#fff" }} to="/teacher/lecture/create">Create Lecture</Link>
        <Link style={{ color: "#fff" }} to="/teacher/messages">Messages</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
