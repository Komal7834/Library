import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchBooks } from "../api/bookApi";
import "./viewbook.css";

const IssueBookPage = () => {
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

  const handleIssueBook = async (bookNo) => {
    const issuedToName = prompt("👤 Enter User Name:");
    if (!issuedToName) {
      alert("⚠️ Name is required to issue a book.");
      return;
    }

    const employeeId = prompt("🆔 Enter Employee ID:");
    if (!employeeId) {
      alert("⚠️ Employee ID is required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/books/issue-book", {
        bookNumber: bookNo,
        issuedDate: new Date().toISOString(),
        issuedToName,
        employeeId,
      });

      console.log("✅ Book Issued:", response.data);
      alert("✅ Book Issued Successfully!");
      getBooks();
    } catch (error) {
      console.error("❌ Issue failed:", error);
      alert("❌ Issue failed: " + (error.response?.data?.error || error.message));
    }
  };

  const filteredBooks = books
    .filter((book) =>
      book.book && book.book.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((book) =>
      subjectFilter ? book.subject?.toLowerCase() === subjectFilter.toLowerCase() : true
    );

  return (
    <div className="v-book-6">
      <div className="v-box-6">
        <h1 className="head6">📚 Issue Books To User:</h1>

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
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => {
                const availability = book.availability ?? (book.quantity - (book.issued || 0));
                return (
                  <tr key={book.bookNo}>
                    <td>{book.bookNo}</td>
                    <td>{book.book}</td>
                    <td>{book.subject || "—"}</td>
                    <td>{book.author}</td>
                    <td>{book.publisher}</td>
                    <td>{availability}</td>
                    <td>
                      <button
                        onClick={() => handleIssueBook(book.bookNo)}
                        disabled={availability <= 0}
                        className="action-button issue-btn"
                      >
                        📖 Issue
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

export default IssueBookPage;
