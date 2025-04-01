import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../api/bookApi"; // Correct import path
import "./viewbook.css";

const ViewBookPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetchBooks();
        console.log("📚 API Response:", response); // Debugging
  
        if (Array.isArray(response.data)) {  
          setBooks(response.data);  // ✅ Ensure `response.data` is an array
        } else {
          console.error("🚨 Unexpected API response:", response);
          setBooks([]); // Fallback to empty array
        }
      } catch (error) {
        console.error("❌ Error fetching books:", error);
      }
    };
  
    getBooks();
  }, []);
  
  
  // Correct property name for filtering
  const filteredBooks = books.filter((book) =>
    book.book && book.book.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="v-book-6">
      <div className="v-box-6">
        <h1 className="head6">📚 Available Books Details :</h1>

        <button className="drop6btn6" onClick={() => navigate("/librarian-dashboard")}>
          🔙 Back
        </button>

        {/* Search Box */}
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search by Book Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Books Table */}
        <table className="table-6">
          <thead>
            <tr>
              <th>Book Number</th>
              <th> Book Name</th>
              <th> Author</th>
              <th> Publisher</th>
              <th> Quantity</th>
              <th> Issued</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.bookNo}</td>
                  <td>{book.book}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>{book.quantity}</td>
                  <td>{book.issued || 0}</td>
                  <td>{book.quantity - (book.issued || 0)  }</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>❌ No books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookPage;
