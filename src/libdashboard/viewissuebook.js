import "./viewissuebook.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewIssueBookPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
   const handlenavigation = (path) => {
    navigate(path);
   };
  // Sample data (Replace this with actual data from your backend)
  const issuedBooks = [
    { bookNumber: "bkb", employeeId: "a jbbb", employeeName: "jbib", issuedDate: "2024-02-01", returnDate: "2024-02-15", status: "Pending" },
    { bookNumber: "vvm5", employeeId: "bigv", employeeName: "bib", issuedDate: "2024-02-05", returnDate: "2024-02-17", status: "Returned" },
  ];
   // Filter books based on search term
   const filteredBooks = issuedBooks.filter(book => book.employeeId.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div className="v-book-8">
      <div className="v-box-8">
        <h1>Issued Books Details :</h1>
        <div><button class="drop6btn8" onClick={() => handlenavigation("/librarian-dashboard")} >Back</button></div>        
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

        <table className="table-8">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Book Number</th>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Issued Date</th>
              <th>Return Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <><tr key={index}>
                <td>{index + 1}</td> {/* Auto-incremented Sr. No. */}
                <td>{book.bookNumber}</td>
                <td>{book.employeeId}</td>
                <td>{book.employeeName}</td>
                <td>{book.issuedDate}</td>
                <td>{book.returnDate}</td>
                <td>{book.status}</td>
              </tr></>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ViewIssueBookPage;