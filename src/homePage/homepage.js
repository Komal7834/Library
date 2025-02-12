import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../homePage/homepage.css"; // Import CSS file


const HomePage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin"); // Default role

  const handleLogin = () => {
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if(role === "librarian"){
      navigate("/librarian-dashboard");
    }else { navigate("/users-dashboard")}
  };

  return (
    

    <div className="home-container">
      <div className="login-box">
        <h1 className="title">Library Management System</h1>
        <p className="csubtitle">Login as:</p>

        <select
          className="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="librarian">Librarian</option>
          <option value="librarian">User</option>
        </select>

        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
