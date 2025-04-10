import "../constant/header.css"; // Import CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <nav>
          <a
            href="https://herosteels.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://herosteels.in/images/logo.png"
              alt="Library Logo"
              className="logo"
            />
          </a>
        </nav>
        <div className="title1"></div>
      </div>

      <nav className="nav">
        <div className="dropdown">
          <button className="dropbtn">Books</button>
          <div className="dropdown-content">
            <a href="/viewbooks?subject=Production and planning">
              Production and Planning
            </a>
            <a href="/viewbooks?subject=Sales and Marketing">
              Sales and Marketing
            </a>
            <a href="/viewbooks?subject=Accounts">Accounts</a>
            <a href="/viewbooks?subject=Human resource">Human Resource</a>
            <a href="/viewbooks?subject=Information technology">
              Information Technology
            </a>
            <a href="/viewbooks?subject=Dispatch">Dispatch</a>
            <a href="/viewbooks?subject=Others">Others</a>
          </div>
        </div>

        <div>
          <button className="dropbtn">Logout</button>
          <div className="dropdown-content"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
