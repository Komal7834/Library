import "./addbook.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBooksection = () => {
   const [role, setRole] = useState("");
  const navigate = useNavigate();
    const handleLogin = (path) => {
        navigate("/librarian-dashboard");
    };
    const handlecancel = (path) => {
      navigate("/librarian-dashboard");
  };
   
     
     return (
       
        <div className="home-5">
            <div className="box-5">
                <div></div><h1> Books Details:</h1>
                <h3 className="h-5"> Subject:</h3>
                <select
            className="role-select-5"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="physics">physics</option>
            <option value="accounts">Accounts</option>
            <option value="planning">Planning</option>
            <option value="other">Others..</option>
          </select>
               <h3 className="h-5"> Book Number:</h3>
                <input type="number" className="input-5" /> 
                <h3 className="h-5">Book Name:</h3>
                <input type="text" placeholder="Enter Book Name" className="input-5" /> 
                <h3 className="h-5"> Author Name:</h3>
                <input type="text" placeholder="Enter Author Name" className="input-5" /> 
                <h3 className="h-5"> Publisher Name: </h3>
                <input type="text" placeholder="Enter Publisher Name"  className="input-5" /> 
                <h3 className="h-5"> Quantity:</h3>
                <input type="number" placeholder="Book wants to add"  className="input-5" /> 
                <button onClick={handleLogin} className="logn-5" > Add</button> 
                <button onClick={ handlecancel} className="logn-5" > Cancel</button>     
                </div>

                
        </div>


     );


};
export default AddBooksection;