import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css"; // Import CSS file


const AdminLandingpage = () => {
   const navigate = useNavigate();
  const [role, setRole] = useState(""); // Default role 
  
  const handlepage = () => {  
    if (role === "Add Librarian") {
      navigate("/admin-dashboard");
    } else if(role === "View Librarian"){
      navigate("/librarian-dashboard");
    }else if(role=== "Delete Librarian")
        { navigate("/users-dashboard")}
        else(role=== "Logout")
        { navigate("../homepage/homepage")}
  };
  
  return (
    

    <div className="landing-container">
      <div className="landing-box">
        <h1 className="title">Admin Section</h1>
       
     <button onClick={handlepage} className="login-button">Add Librarian</button>
     <button onClick={handlepage} className="login-button">View Librarian</button>    
     <button onClick={handlepage} className="login-button">Delete Librarian</button>
        <button onClick={handlepage} className="login-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminLandingpage;
