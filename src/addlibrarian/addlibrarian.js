import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLibrarian } from "../api/userApi"; // Import API function
import "./addlibrarian.css";

const AddLibrarianPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "", // ✅ Changed from "contactNumber" to "mobile"
    city: "",
    role: "librarian", // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "mobile" ? String(value) : value, // Ensure mobile is a string
    }));
  };

  const handleSubmit = async () => {
    console.log("📤 Sending request data:", JSON.stringify(formData, null, 2)); // Debugging

    try {
      const response = await addLibrarian(formData);
      alert("✅ Librarian added successfully!");
      console.log("📢 API Response:", response);
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("❌ API Error:", error.response?.data || error);
      alert("❌ Failed to add librarian: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="home-2">
      <div className="landing-box2">
        <h1>Add Librarian Form</h1>

        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter Name" className="input-field" onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Email" className="input-field" onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter Password" className="input-field" onChange={handleChange} />

        <label>Mobile:</label> {/* ✅ Changed label to "Mobile" */}
        <input type="text" name="mobile" placeholder="Enter Mobile Number" className="input-field" onChange={handleChange} />

        <label>City:</label>
        <input type="text" name="city" placeholder="Enter City" className="input-field" onChange={handleChange} />

        <button onClick={handleSubmit} className="login-button3">Save</button>
        <button onClick={() => navigate("/admin-dashboard")} className="login-button3">Cancel</button>
      </div>
    </div>
  );
};

export default AddLibrarianPage;
