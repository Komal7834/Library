import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./dellib.css";

const DeleteLibrarianPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleDelete = async () => {
    if (!email) {
      alert("Please enter an email!");
      return;
    }

    try {
      await axios.delete(`http://localhost:3001/users/${email}`);
      alert("Librarian deleted successfully!");
      navigate("/admin-dashboard"); // Redirect after deletion
    } catch (error) {
      console.error("❌ Error deleting librarian:", error);
      alert("Failed to delete librarian!");
    }
  };

  return (
    <div className="homedel">
      <div className="deltbox">
        <h1>Delete Librarian Form</h1>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter Librarian Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleDelete} className="login-button3">Delete</button>
        <button onClick={() => navigate("/admin-dashboard")} className="login-button3">Cancel</button>
      </div>
    </div>
  );
};

export default DeleteLibrarianPage;
