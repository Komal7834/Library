import "./libdash.css";
import { useNavigate } from "react-router-dom";

const LibrarianDashboard = () => {

 const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

   return (
       <div className="ldashcontainer">
        <div className="dash-box">
            <h1 className="sub1"> Librarian Section </h1>
            <div className="dashbutton">
                <button onClick={() => handleNavigation("/add-book")} className="button4"> Add Books</button>
                <button onClick={() => handleNavigation("/view-book")} className="button4"> View Books</button>
                <button onClick={() => handleNavigation("/issue-book")} className="button4"> Issued Book</button>
                <button onClick={() => handleNavigation("/v-issue-book")} className="button4"> view Issued Book</button>
                <button onClick={() => handleNavigation("/return-book")} className="button4"> Return Book</button>
                <button onClick={() => handleNavigation("/")} className="button4"> Logout</button>
            </div>
            </div>
       </div>


   );

};
 export default LibrarianDashboard;