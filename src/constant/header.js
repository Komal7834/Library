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
        <div className="title1">
  <h1 className="library-title">📚 Hero Steels Library</h1>
</div>

      </div>

     
    </header>
  );
};

export default Header;
