import { useState } from "react";
import "./viewbook.css";
import { useNavigate } from "react-router-dom";

const ViewBookPage = () => {
 const navigate = useNavigate();
 const [searchTerm, setSearchTerm] = useState("");
   const handlenavigation = (path) => {
    navigate(path);
   };
   const books = [
    { subject: "12", number: "bkb", name: "a jbbb", author: "jbib", publisher: "XYZ", quantity: "5", issued: "" ,availability:"" },
    { subject: "14", number: "vvm5", name: "bigv", author: "bib", publisher: "ABC", quantity: "6", issued: "" ,availability:""},
    // Add more book data as needed
  ];

  // Filter books based on search term
  const filteredBooks = books.filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()));

  

  return (

   <div className="v-book-6" >
     <div className="v-box-6">
          <div></div><h1 className="head6"> Available Books Details :</h1>
           
           
           <div><button class="drop6btn6" onClick={() => handlenavigation("/librarian-dashboard")} >Back</button></div>        
           <div className="search-container">
          <input
            type="text"
            placeholder="Search by Book Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button" onClick={() => {}}>Search</button>
        </div>

            <table className="table-6">
          <tr>
             <th> Book Number:</th>
             <th>Book Name:</th>
             <th>Author Name:</th>
             <th>Publisher:</th>
             <th>Quantity:</th>
             <th>Issued Book:</th>
             <th>Availability:</th>
         </tr>
         <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.subject}</td>
                <td>{book.number}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.quantity}</td>
                <td>{book.issued}</td>
                <td>{book.availability}</td>
              </tr>
            ))}
          </tbody>
         <tr>
          <td></td>
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
          <td></td>
          </tr>
         <tr>
          <td></td>
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
          <td></td>
          </tr>
         <tr>
          <td></td>
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
          <td></td>
          </tr>
         <tr>
          <td></td>
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
          <td></td>
          </tr>
         <tr>
          <td></td>
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
          <td></td>
          </tr>
         <tr>
          <td></td>
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