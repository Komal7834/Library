import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homePage/homepage";
import AdminLandingpage from "./adminlandingpage.js/landingpage";
import AddLibrarianPage from "./addlibrarian/addlibrarian";
import ViewLibrarianPage from "./viewlib/viewlib";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin-dashboard" element={<AdminLandingpage />} />
        <Route path="/add-librarian" element={<AddLibrarianPage />} />
        <Route path="/view-librarian" element={<ViewLibrarianPage />} />

      </Routes>
    </Router>
  );
}
export default App;
