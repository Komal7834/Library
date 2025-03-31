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
import ViewIssueBookPage from "./libdashboard/viewissuebook";
import RetunBookPage from "./libdashboard/returnbook";
import BookPage1 from "./constant/book1";
import BookPage2 from "./constant/book2";
import BookPage3 from "./constant/book3";
import BookPage4 from "./constant/book4";
import BookPage5 from "./constant/book5";

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
        <Route path="/v-issue-book" element={<ViewIssueBookPage />} />
        <Route path="/return-book" element={<RetunBookPage/>} />
        <Route path="/bookpage1" element={<BookPage1/>} />
        <Route path="/bookpage2" element={<BookPage2/>} />
        <Route path="/bookpage3" element={<BookPage3/>} />
        <Route path="/bookpage4" element={<BookPage4/>} />
        <Route path="/bookpage5" element={<BookPage5/>} />
        


      </Routes>
    </Router>
  );
}
export default App;
