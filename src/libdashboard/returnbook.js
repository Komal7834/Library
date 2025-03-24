import { useNavigate } from "react-router-dom";
import "./returnbook.css";      
const RetunBookPage = () => {

    const navigate = useNavigate();
      const  Handlelogin = (path) => {
         navigate(path);
};




    return (
        <><div className="home-9"></div><h1 className="head9"> Return Books </h1><div className="box-9">
        <h2 className="retunhead"> Book Number:</h2>
        <input type="text" className="input-field-9" placeholder="Enter Book No."></input>
        <h2 className="retunhead"> Employee Id:</h2>
        <input type="text" className="input-field-9" placeholder="Enter Book No."></input>
        <div></div>

        <button className="button-9" onClick={() => Handlelogin("/librarian-dashboard")}>Return Book</button>
        <button className="button-9" onClick={() => Handlelogin("/librarian-dashboard")}>Back</button></div></>
        
    );

};
export default RetunBookPage;