import "./addbook.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBooksection = () => {
  const [bookData, setBookData] = useState({
    subject: "",
    bookNumber: "",
    book: "",
    author: "",
    publisher: "",
    quantity: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleAddBook = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const token = localStorage.getItem("token");

      // ✅ Convert `bookNumber` and `quantity` to numbers before sending
      const formattedBookData = {
        subject: bookData.subject,
        bookNo: Number(bookData.bookNumber), // Convert to number
        book: bookData.book, // Keep book title as string
        author: bookData.author,
        publisher: bookData.publisher,
        quantity: Number(bookData.quantity), // Convert to number
      };

      console.log("📤 Sending data:", formattedBookData); // Debugging

      const response = await axios.post("http://localhost:3001/books/addbooks", formattedBookData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("📚 Book added successfully!");
        navigate("/librarian-dashboard");
      }
    } catch (error) {
      console.error("❌ Error adding book:", error.response?.data || error);
      alert("Failed to add book. Please check the input fields.");
    }
  };

  return (
    <div className="home-5">
      <div className="box-5">
        <h1>📖 Book Details</h1>

        <form onSubmit={handleAddBook}>
          <h3 className="h-5">Subject:</h3>
          <select className="role-select-5" name="subject" value={bookData.subject} onChange={handleChange} required>
            <option value="">Select Subject</option>
            <option value="Physics">Physics</option>
            <option value="Accounts">Accounts</option>
            <option value="Planning">Planning</option>
            <option value="Other">Others</option>
          </select>

          <h3 className="h-5">Book Number:</h3>
          <input type="number" name="bookNumber" className="input-5" value={bookData.bookNumber} onChange={handleChange} required />

          <h3 className="h-5">Book Name:</h3>
          <input type="text" name="book" placeholder="Enter Book Name" className="input-5" value={bookData.book} onChange={handleChange} required />

          <h3 className="h-5">Author Name:</h3>
          <input type="text" name="author" placeholder="Enter Author Name" className="input-5" value={bookData.author} onChange={handleChange} required />

          <h3 className="h-5">Publisher Name:</h3>
          <input type="text" name="publisher" placeholder="Enter Publisher Name" className="input-5" value={bookData.publisher} onChange={handleChange} required />

          <h3 className="h-5">Quantity:</h3>
          <input type="number" name="quantity" placeholder="Enter Quantity" className="input-5" value={bookData.quantity} onChange={handleChange} required />

          <button className="bttnn-5" type="button" onClick={() => navigate("/librarian-dashboard")}>
            ❌ Cancel
          </button>
          <button className="bttnn-5" type="submit">
            📚 Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooksection;
