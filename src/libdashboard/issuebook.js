import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./issuebook.css";

const IssueBookPage = () => {
  const navigate = useNavigate();
  const [bookNumber, setBookNumber] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleIssueBook = async () => {
    try {
      await axios.post("http://localhost:3001/books/issue-book", {
        bookNumber: parseInt(bookNumber),
        issuedate,
        employeeId,
        employeeName,
        contactNumber,
      });
      alert("✅ Book issued successfully!");
      navigate("/librarian-dashboard");
    } catch (error) {
      console.error("❌ Issue failed:", error);
      alert("❌ Failed to issue book!");
    }
  };

  return (
    <div className="issue-7">
      <div className="issuebox-7">
        <h1>Issued Books:</h1>
        <h3 className="h-7">Book Number:</h3>
        <input className="input-field7" value={bookNumber} onChange={(e) => setBookNumber(e.target.value)} placeholder="Enter Number" />
        
        <h3 className="h-7">issue Date:</h3>
        <input className="input-field7" value={issuedate} onChange={(e) => setIssueDate(e.target.value)} placeholder="Enter Number" />

        <h3 className="h-7">Employee ID:</h3>
        <input className="input-field7" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Enter ID" />

        <h3 className="h-7">Employee Name:</h3>
        <input className="input-field7" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Enter Name" />

        <h3 className="h-7">Contact Number:</h3>
        <input className="input-field7" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Enter Number" />

        <button className="button7" onClick={handleIssueBook}>Issue Book</button>
        <button className="button7" onClick={() => navigate("/librarian-dashboard")}>Cancel</button>

        <h2 className="head-07">NOTE: Please check Employee ID before issuing book</h2>
      </div>
    </div>
  );
};

export default IssueBookPage;
