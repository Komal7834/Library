
import "./addlibrarian.css";

import { useNavigate } from "react-router-dom";

const AddLibrarianPage = () => {  
 
 
 const navigate = useNavigate();
  
 const handleLogin1 = (path) => {
  navigate("/admin-dashboard");
    
};

  return (

   <div className="home-2" >
     <div className="landing-box2">
          <div></div><h1>Add Librarian Form </h1>
          Name:
          <input type="text" placeholder="Enter Name" className="input-field" /> 
          Password:
          <input type="text" placeholder="Enter Password" className="input-field" />
          Email:
          <input type="text" placeholder="Enter Your Email" className="input-field" /> 
          Address:
          <input type="textbox" placeholder="Enter Your Address" className="input-field" /> 
          City:
          <input type="text" placeholder="Enter Your City" className="input-field" />
          Contact Number:
          <input type="text" placeholder="Enter Your Number" className="input-field" />
          <button onClick={handleLogin1} className="login-button3" >Save</button>
          <button onClick={handleLogin1} className="login-button3" >Cancel</button>
          
        </div>
    </div>
  );


};
export default AddLibrarianPage;