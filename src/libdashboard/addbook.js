import "./addbook.css";
import { useNavigate } from "react-router-dom";

const AddBooksection = () => {

  const navigate = useNavigate();
    const handleLogin = (path) => {
        navigate("/librarian-dashboard");
    };
     
     return (
       
        <div className="home-5">
            <div className="box-5">
                <div></div><h1> Books Details:</h1>
               <h3 className="h-5"> Book Number:</h3>
                <input type="text" className="input-5" /> 
                <h3 className="h-5">Book Name:</h3>
                <input type="text" placeholder="Enter Book Name" className="input-5" /> 
                <h3 className="h-5"> Author Name:</h3>
                <input type="text" placeholder="Enter Author Name" className="input-5" /> 
                <h3 className="h-5"> Publisher Name: </h3>
                <input type="text" placeholder="Enter Publisher Name"  className="input-5" /> 
                <h3 className="h-5"> Quantity:</h3>
                <input type="text" placeholder="How many book wants to add"  className="input-5" /> 
                <button onClick={handleLogin} className="logn-5" > ADD</button> 
                <button onClick={handleLogin} className="logn-5" > Cancel</button>     
                </div>
        </div>


     );


};
export default AddBooksection;