
import "./viewlib.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ViewLibrarianPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
   const handlenavigation = (path) => {
    navigate(path);
   };
  // Sample data (Replace this with actual data from your backend)
  const viewlibs = [
    { libname:"A" , password: "123", email:"abc@gmail.com", address:"123,Ludhiana" , contactnumber:"1122334455" },
    { libname:"B" , password: "345", email:"bcd@gmail.com", address:"123,Ludhiana" , contactnumber:"1667788991" },
    ];
    const filterlibs = viewlibs.filter(libs => libs.libname.toLowerCase().includes(searchTerm.toLowerCase()));

  return (

   <div className="viewcontainer" >
     <div className="view-box">
          <div></div><h1>View Current Librarian Details </h1>
          <button class="bttn03" onClick={() => handlenavigation("/admin-dashboard")} >Back</button>
          <div className="search-container3">
          <input
            type="text"
            placeholder="Search by Librarian Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input3"
          />
          <button className="search-button3" onClick={() => {}}>Search</button>
         <table>
          <tr> 
             <th>Sr. No.</th>
             <th>Name:</th>
             <th>Password:</th>
             <th>Email:</th>
             <th>Address:</th>
             <th>Contact Number:</th>
         </tr>
         <tbody>
            {filterlibs.map((libs, index) => (
              <><tr key={index}>
                <td>{index + 1}</td> {/* Auto-incremented Sr. No. */}
                <td>{libs.libname}</td>
                <td>{libs.password}</td>
                <td>{libs.email}</td>
                <td>{libs.address}</td>
                <td>{libs.contactnumber}</td>
                
              </tr></>
            ))}
          </tbody>
         <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         </tr>
        
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
         </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
         <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          </table>
        </div>
    </div> </div>
  );


};
export default ViewLibrarianPage;