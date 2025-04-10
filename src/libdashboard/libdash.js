import "./libdash.css";
import { useNavigate } from "react-router-dom";

const LibrarianDashboard = () => {

 const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  const quotes = [
    {
      id: 1,
      text1: "Thought of the day ..",
      text2: "Your mind is a magnet. If you think of blessings, you attract blessings, and if you think of problems you attract problems.Always cultive good thoughts and remain positive.",
    }, ];

   return (
       <div className="ldashcontainer">
        <div className="slider-container">
        
          { quotes.map((quote) => (
            <div key={quote.id} className="slide">
              <div className="quote-box">
                <p className="quote-text">"{quote.text1}"</p>
                <p className="quote-author">- {quote.text2}</p>
             </div> </div>)) 
         }
        <div className="dash-box">
            <h1 className="sub1"> Librarian Section </h1>
            <div className="dashbutton">
                <button onClick={() => handleNavigation("/add-book")} className="button4"> Add Books</button>
                <button onClick={() => handleNavigation("/view-book")} className="button4"> View Books</button>
                <button onClick={() => handleNavigation("/issue-book")} className="button4"> Issue Book</button>
                <button onClick={() => handleNavigation("/v-issue-book")} className="button4"> view Issued Book</button>
                <button onClick={() => handleNavigation("/")} className="button4"> Logout</button>
            </div>
            </div>
       </div> </div>


   );

};
 export default LibrarianDashboard;              