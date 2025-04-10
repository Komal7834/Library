import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchBooks } from "../api/bookApi";
import "./viewbook.css";

const ReturnBookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const subjectFilter = queryParams.get("subject");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await fetchBooks();
      if (Array.isArray(response.data)) {
        setBooks(response.data);
      } else {
        console.error("🚨 Unexpected API response:", response);
        setBooks([]);
      }
    } catch (error) {
      console.error("❌ Error fetching books:", error);
    }
  };

  const handleReturnBook = async (bookNo) => {
    try {
      const response = await axios.post("http://localhost:3001/books/return-book", {
        bookNumber: bookNo,
        studentName: "Default Student",
        returnDate: new Date().toISOString(),
      });

      console.log("📦 Book Returned:", response.data);
      alert("📦 Book Returned Successfully!");
      getBooks();
    } catch (error) {
      console.error("❌ Return failed:", error);
      alert("❌ Return failed: " + (error.response?.data?.error || error.message));
    }
  };

  const filteredBooks = books
  .filter((book) =>
    book.book && book.book.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((book) =>
    subjectFilter ? book.subject?.toLowerCase() === subjectFilter.toLowerCase() : true
  )
  .filter((book) => book.issued > 0); // ⬅️ Hides books that have 0 issued


  return (
    <div className="v-book-6">
      <div className="v-box-6">
        <h1 className="head6">📚 Return A book:</h1>

        <button className="drop6btn6" onClick={() => navigate("/librarian-dashboard")}>
          🔙 Back
        </button>

        {subjectFilter && (
          <h3 style={{ margin: "10px 0" }}>
            📂 Showing books for subject: <b>{subjectFilter}</b>
          </h3>
        )}

        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search by Book Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <table className="table-6">
          <thead>
            <tr>
              <th>Book No</th>
              <th>Book Name</th>
              <th>Subject</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Issued</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => {
                return (
                  <tr key={book.bookNo}>
                    <td>{book.bookNo}</td>
                    <td>{book.book}</td>
                    <td>{book.subject || "—"}</td>
                    <td>{book.author}</td>
                    <td>{book.publisher}</td>
                    <td>{book.issued || 0}</td>
                    <td>
                      <button
                        onClick={() => handleReturnBook(book.bookNo)}
                        disabled={book.issued <= 0}
                        className="action-button return-btn"
                      >
                        🔄 Return
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: "center" }}>
                  ❌ No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReturnBookPage;
