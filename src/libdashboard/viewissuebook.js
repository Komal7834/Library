import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./viewissuebook.css";

const ViewIssuedBookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [issuedBooks, setIssuedBooks] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const subjectFilter = queryParams.get("subject");

  useEffect(() => {
    getIssuedBooks();
  }, []);

  const getIssuedBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books/issued-books");
      console.log("📦 Issued books response:", response.data);
      setIssuedBooks(response.data);
    } catch (error) {
      console.error("❌ Error fetching issued books:", error);
    }
  };

  const filteredBooks = issuedBooks
    .filter((entry) =>
      !searchTerm || (entry.book?.book?.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter((entry) =>
      subjectFilter
        ? entry.book?.subject?.toLowerCase() === subjectFilter.toLowerCase()
        : true
    );

  return (
    <div className="v-book-6">
      <div className="v-box-6">
        <h1 className="head6">📚 Issued Books Details:</h1>

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
              <th>Sr. No.</th>
              <th>Book No</th>
              <th>Book Name</th>
              <th>Subject</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Issued To</th>
              <th>Employee ID</th>
              <th>Issued Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{entry.book?.bookNo || "—"}</td>
                  <td>{entry.book?.book || "—"}</td>
                  <td>{entry.book?.subject || "—"}</td>
                  <td>{entry.book?.author || "—"}</td>
                  <td>{entry.book?.publisher || "—"}</td>
                  <td>{entry.issuedToName || "—"}</td>
                  <td>{entry.employeeId || "—"}</td>
                  <td>{entry.issuedDate ? new Date(entry.issuedDate).toLocaleDateString() : "—"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  ❌ No issued books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewIssuedBookPage;
