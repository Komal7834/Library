
import "./addlibrarian.css";
import { useState } from "react";

const AddLibrarianPage = () => {
 
 const [role] = useState("save");
  
const handleLogin = () => {
    if(role === "Save"){
        console.log("information is saved");

    } else if(role === "Cancel"){
        console.log("try once again...");
    }


};

  return (

   <div className="home-container" >
     <div className="landing-box">
          <div></div><h1>Add Librarian Form </h1>
          Name:
          <input type="text" placeholder="enter name" className="input-field" /> 
          Password:
          <input type="text" placeholder="enter password" className="input-field" />
          Email:
          <input type="text" placeholder="enter your email" className="input-field" /> 
          Address:
          <input type="textbox" placeholder="enter your address" className="input-field" /> 
          City:
          <input type="text" placeholder="enter your city" className="input-field" />
          Contact Number:
          <input type="text" placeholder="enter your number" className="input-field" />
          <button onClick={handleLogin} className="login-button3" >Save</button>
          <button onClick={handleLogin} className="login-button3" >Cancel</button>
          
        </div>
    </div>
  );


};
export default AddLibrarianPage;