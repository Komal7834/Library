import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homePage/homepage";
import AdminLandingpage from "./adminlandingpage.js/landingpage";
import AddLibrarianPage from "./addlibrarian/addlibrarian";
import ViewLibrarianPage from "./viewlib/viewlib";
import DeleteLibrarianPage from "./dellib/dellib";
import LibrarianDashboard from "./libdashboard/libdash";
import AddBooksection from "./libdashboard/addbook";
import ViewBookPage from "./libdashboard/viewbook";
import IssueBookPage from "./libdashboard/issuebook";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin-dashboard" element={<AdminLandingpage />} />
        <Route path="/add-librarian" element={<AddLibrarianPage />} />
        <Route path="/view-librarian" element={<ViewLibrarianPage />} />
        <Route path="/delete-librarian" element={<DeleteLibrarianPage />} />
        <Route path="/librarian-dashboard" element={<LibrarianDashboard />} />
        <Route path="/add-book" element={<AddBooksection />} />
        <Route path="/view-book" element={<ViewBookPage />} />
        <Route path="/issue-book" element={<IssueBookPage />} />



      </Routes>
    </Router>
  );
}
export default App;
