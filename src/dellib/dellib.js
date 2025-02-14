
import { useNavigate } from "react-router-dom";
import "./dellib.css";


const DeleteLibrarianPage = () => {
 
 const navigate = useNavigate();
  
const handleLogin = () => {
    navigate("/admin-dashboard");

};

  return (

   <div className="homedel" >
     <div className="deltbox">
          <div></div><h1>Delete Librarian Form </h1>
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
          <button onClick={handleLogin} className="login-button3" >Delete</button>
          <button onClick={handleLogin} className="login-button3" >Cancel</button>
          
        </div>
    </div>
  );


};
export default DeleteLibrarianPage;