import { useNavigate } from "react-router-dom";
import "./landingpage.css"; // Import CSS file

const AdminLandingpage = () => {
  const navigate = useNavigate();

  // Fix the navigation function to use the path passed as argument
  const handleNavigation = (path) => {
    navigate(path);  // Use the passed path
  };

  return (
    <div className="home-container1">
      <div className="landing-box1">
        <h1 className="subtitle1">Manage Librarians</h1>

        <div className="button-group">
          <button onClick={() => handleNavigation("/add-librarian")} className="action-button1">
            Add Librarian
          </button>
          <button onClick={() => handleNavigation("/view-librarian")} className="action-button1">
            View Librarian
          </button>
          <button onClick={() => handleNavigation("/delete-librarian")} className="action-button1">
            Delete Librarian
          </button>
          <button onClick={() => handleNavigation("/")} className="action-button1">
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingpage;
