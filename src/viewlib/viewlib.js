import "./viewlib.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API calls

const ViewLibrarianPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [librarians, setLibrarians] = useState([]);
  
  // Fetch librarian data from backend
  useEffect(() => {
    const fetchLibrarians = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setLibrarians(response.data.data); // Assuming API returns { message: "", data: [] }
      } catch (error) {
        console.error("❌ Error fetching librarians:", error);
        alert("Failed to fetch librarian data!");
      }
    };
    fetchLibrarians();
  }, []);

  // Filter librarians based on search term
  const filterlibs = librarians.filter(libs => {
    const libname = libs.name || ''; // Fallback to an empty string if libname is undefined or null
    return libname.toLowerCase().includes(searchTerm.toLowerCase());
  });
  

  return (
    <div className="viewcontainer">
      <div className="view-box">
        <h1>View Current Librarian Details</h1>
        <button className="bttn03" onClick={() => navigate("/admin-dashboard")}>
          Back
        </button>
        
        <div className="search-container3">
          <input
            type="text"
            placeholder="Search by Librarian Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input3"
          />
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {filterlibs.length > 0 ? (
              filterlibs.map((lib, index) => (
                <tr key={lib.id}>
                  <td>{index + 1}</td>
                  <td>{lib.name}</td>
                  <td>{lib.email}</td>
                  <td>{lib.city}</td>
                  <td>{lib.mobile}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No librarians found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLibrarianPage;
