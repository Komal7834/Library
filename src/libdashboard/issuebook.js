import { useNavigate } from "react-router-dom";
import "./issuebook.css";

const IssueBookPage = () => {
    
    const navigate = useNavigate();
    const handleLogin = (path) => {
        navigate("/librarian-dashboard");

    };


    return (

        <div className="issue-7" >
            <div className="issuebox-7" >
                <div></div><h1> Issued Books:</h1>
               <h3 className="h-7"> Book Number:</h3>
               <input className="input-field7" placeholder="Enter Number" />
               <h3 className="h-7"> Employee id:</h3>
               <input className="input-field7" placeholder="Enter Id" /> 
               <h3 className="h-7"> Employee Name:</h3>
               <input className="input-field7" placeholder="Enter Employee Name" /> 
               <h3 className="h-7"> Contact Number:</h3>
               <input className="input-field7" placeholder="Enter Number" />
               <button className="button7" onClick={handleLogin} > Issue Book</button>
               <button className="button7" onClick={handleLogin} > Cancel</button>
               <div></div>
               <h2> NOTE: Please check Employee Id before issuing book</h2>
            </div>
        </div>
      

    );


};
export default IssueBookPage;