import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "../homePage/homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email,    
        password,
        role,
      });

      if (response.data.role === "admin") {
        navigate("/admin-dashboard");
      } else if (response.data.role === "librarian") {
        navigate("/librarian-dashboard");
      } else {
        navigate("/users-dashboard");
      }
    } catch (error) {
      alert("Invalid email or password. Please try again.");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const quotes = [
    { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 2, text: "You can't control others' acts, but you can control your reaction to their acts.", author: "Napoleon Hill" },
    { id: 3, text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  ];

  return (
    <div className="homepage">
      <div className="slider-container">
        <Slider {...settings}>
          {quotes.map((quote) => (
            <div key={quote.id} className="slide">
              <div className="quote-box">
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">- {quote.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
  {/* 👇 This is your new image section */}
  <div className="image-section">
    <img src="/libtable1.jpg" alt="Library Theme" className="section-image" />
  </div>

      <div className="login-container">
        <div className="glass-box">
          <h1 className="title">Library Management System</h1>
          <p className="subtitle">Login as:</p>

          <select className="role-select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="librarian">Librarian</option>
          </select>

          <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
