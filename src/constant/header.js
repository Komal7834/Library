
import "../constant/header.css"; // Import CSS file

const Header = () => {
 




return (
<header class="header">
<div class="logo-container">
            <img src="https://herosteels.in/images/logo.png" alt="Library Logo" class="logo"/>
            <div class="title1">
            
            </div>
        </div>
        
        <nav class="nav">
            <div class="dropdown">
                <button class="dropbtn">Books </button>
                <div class="dropdown-content">
                    <a href="#">Chemistry</a>
                    <a href="#">Maths</a>
                    <a href="#">Psychology</a>
                    <a href="#">Finance</a>
                    <a href="#">Sales And Marketing</a>
                    <a href="#">Production And Planning</a>
                </div>
            </div>

            

            <div>
                <button class="dropbtn">Logout</button>
                <div class="dropdown-content">
                    
                </div>
            </div>
        </nav>
        </header>

  )};

export default Header;
