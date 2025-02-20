
import "./viewbook.css";
import { useNavigate } from "react-router-dom";

const ViewBookPage = () => {
 const navigate = useNavigate();
   const handlenavigation = (path) => {
    navigate(path);
   };
  return (

   <div className="v-book-6" >
     <div className="v-box-6">
          <div></div><h1 className="head6"> Available Books Details :</h1>
           
           
           <div><button class="drop6btn6" onClick={() => handlenavigation("/librarian-dashboard")} >Back</button></div>        
            <table className="table-6">
          <tr>
             <th> Book Number:</th>
             <th>Book Name:</th>
             <th>Author Name:</th>
             <th>Publisher:</th>
             <th>Quantity:</th>
             <th>Issued Book:</th>
         </tr>
         <tr>
         <td>12</td>
         <td>bkb</td>
         <td>a jbbb</td>
         <td>jbib</td>
         <td>5</td>
         <td></td>
         </tr>
         <tr>
          <td>14</td>
          <td>vvm5</td>
          <td>bigv</td>
          <td>bib</td>
          <td>6</td>
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
    </div>
  );


};
export default ViewBookPage;