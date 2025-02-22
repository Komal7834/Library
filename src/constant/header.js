

import "../constant/header.css"; // Import CSS file

const Header = () => {



return (
<header class="header">
<div class="logo-container">
           <nav><a href="https://herosteels.com" target="_blank" rel="noopener noreferrer" >
            <img src="https://herosteels.in/images/logo.png" alt="Library Logo" class="logo"/>
            </a> 
            </nav>
            <div class="title1">
            
            </div>
        </div>
        
        <nav class="nav">
        {/* <button class="dropbtn" href="/purchasepage" >Purchase</button> */}
            
            <div class="dropdown">
                <button class="dropbtn">Books </button>
                <div class="dropdown-content">
                    <a href="/bookpage1">Production And Planning</a>
                    <a href="/bookpage2">Maths</a>
                    <a href="/bookpage3">Psychology</a>
                    <a href="/bookpage4">Finance</a>
                    <a href="/bookpage5">Sales And Marketing</a>
                   
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
