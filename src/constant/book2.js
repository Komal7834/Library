import "./book.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookPage1 = () => {
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
    <div className="book1-6">
      <div className="box1-6">
        <button className="bttn6" onClick={() => handlenavigation("/")}>Back</button>
        
        {/* Search Bar */}
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
        
        <table className="table1-6">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Book Number</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Publisher</th>
              <th>Quantity</th>
              <th>Issued Book</th>
              <th>Availability</th>
            </tr>
           
          </thead>
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
                <td>{book.availability} </td>
              </tr>
              
            ))}
                <tr>
          <td></td>
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
          <td></td>
          
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookPage1;